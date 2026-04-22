"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://passeport-cognitif-mvp.onrender.com/dashboard/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Passeport Cognitif</h1>

      <h2>Profil</h2>
      <p>Niveau actuel: {data.profile.current_level}</p>
      <p>Objectif: {data.profile.target_level}</p>
      <p>Progression: {data.profile.progress_score}%</p>
      <p>Confiance: {data.profile.confidence_score}%</p>
      <p>Engagement: {data.profile.engagement_score}%</p>

      <h2>Recommandations</h2>
      {data.recommendations.map((rec: any, i: number) => (
        <div key={i}>
          <p><strong>{rec.recommended_module}</strong></p>
          <p>{rec.rationale}</p>
        </div>
      ))}
    </div>
  );
}
