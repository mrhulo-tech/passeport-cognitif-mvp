"use client";

import { useEffect, useState } from "react";

type DashboardData = {
  profile: {
    user_id: number;
    domain: string;
    current_level: string;
    target_level: string;
    progress_score: number;
    confidence_score: number;
    engagement_score: number;
  };
  indicators: {
    name: string;
    value: number;
    interpretation: string;
  }[];
  recommendations: {
    user_id: number;
    recommended_module: string;
    priority: string;
    rationale: string;
  }[];
};

export default function Home() {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://passeport-cognitif-mvp.onrender.com/dashboard/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, [userId]);

  if (error) return <p>Erreur API : {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Passeport Cognitif</h1>
      <p>Profil d’apprentissage dynamique basé sur les données</p>

      {/* 🔥 NOUVEAU : SELECTEUR */}
      <label>
        Choisir utilisateur :
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          <option value={1}>Utilisateur 1</option>
          <option value={2}>Utilisateur 2</option>
        </select>
      </label>

      <hr />

      <h2>Utilisateur : {data.profile.user_id}</h2>

      <h3>Profil d’apprentissage</h3>
      <p>Niveau actuel : {data.profile.current_level}</p>
      <p>Objectif : {data.profile.target_level}</p>
      <p>Progression : {data.profile.progress_score}%</p>
      <p>Confiance : {data.profile.confidence_score}%</p>
      <p>Engagement : {data.profile.engagement_score}%</p>

      <hr />

      <h3>Indicateurs</h3>
      {data.indicators.map((ind, i) => (
        <p key={i}>
          {ind.name} : {ind.value} ({ind.interpretation})
        </p>
      ))}

      <hr />

      <h3>Recommandations personnalisées</h3>
      {data.recommendations.map((rec, i) => (
        <div key={i}>
          <p><strong>Module :</strong> {rec.recommended_module}</p>
          <p><strong>Priorité :</strong> {rec.priority}</p>
          <p><strong>Raison :</strong> {rec.rationale}</p>
        </div>
      ))}
    </div>
  );
}
