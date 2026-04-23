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

async function getDashboard(): Promise<DashboardData> {
  const res = await fetch("https://passeport-cognitif-mvp.onrender.com/dashboard/1", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

function translateIndicator(name: string) {
  if (name === "oral_expression") return "Expression orale";
  if (name === "listening_comprehension") return "Compréhension orale";
  return name;
}

function translateInterpretation(value: string) {
  if (value === "to_improve") return "À améliorer";
  if (value === "stable") return "Stable";
  return value;
}

function translateRationale(value: string) {
  if (value === "expression_orale_below_target") {
    return "Votre expression orale est en dessous du niveau cible";
  }
  return value;
}

export default async function Home() {
  const data = await getDashboard();

  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif", maxWidth: 800 }}>
      <h1>Passeport Cognitif</h1>
      <p>Profil d’apprentissage dynamique basé sur les données</p>

      <hr />

      <h2>Profil d’apprentissage</h2>
      <p><strong>Niveau actuel :</strong> {data.profile.current_level}</p>
      <p><strong>Objectif :</strong> {data.profile.target_level}</p>
      <p><strong>Progression :</strong> {data.profile.progress_score}%</p>
      <p><strong>Confiance :</strong> {data.profile.confidence_score}%</p>
      <p><strong>Engagement :</strong> {data.profile.engagement_score}%</p>

      <hr />

      <h2>Indicateurs</h2>
      {data.indicators.map((indicator, i) => (
        <p key={i}>
          <strong>{translateIndicator(indicator.name)} :</strong>{" "}
          {indicator.value} ({translateInterpretation(indicator.interpretation)})
        </p>
      ))}

      <hr />

      <h2>Recommandations personnalisées</h2>
      {data.recommendations.map((rec, i) => (
        <div key={i} style={{ marginBottom: 15 }}>
          <p><strong>Module recommandé :</strong> {rec.recommended_module}</p>
          <p><strong>Priorité :</strong> {rec.priority}</p>
          <p><strong>Raison :</strong> {translateRationale(rec.rationale)}</p>
        </div>
      ))}
    </div>
  );
}
