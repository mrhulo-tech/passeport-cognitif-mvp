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
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://passeport-cognitif-mvp.onrender.com/dashboard/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        setError(String(err));
      });
  }, []);

  if (error) {
    return <div style={{ padding: 20 }}>Erreur API : {error}</div>;
  }

  if (!data) {
    return <div style={{ padding: 20 }}>Chargement...</div>;
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Passeport Cognitif</h1>

      <h2>Profil</h2>
      <p>Niveau actuel : {data.profile.current_level}</p>
      <p>Objectif : {data.profile.target_level}</p>
      <p>Progression : {data.profile.progress_score}%</p>
      <p>Confiance : {data.profile.confidence_score}%</p>
      <p>Engagement : {data.profile.engagement_score}%</p>

      <h2>Indicateurs</h2>
      {data.indicators.map((indicator, i) => (
        <p key={i}>
          {indicator.name} : {indicator.value} ({indicator.interpretation})
        </p>
      ))}

      <h2>Recommandations</h2>
      {data.recommendations.map((rec, i) => (
        <div key={i}>
          <p><strong>{rec.recommended_module}</strong></p>
          <p>Priorité : {rec.priority}</p>
          <p>Raison : {rec.rationale}</p>
        </div>
      ))}
    </div>
  );
}
