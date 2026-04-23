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

async function getDashboard(userId: string): Promise<DashboardData> {
  const res = await fetch(
    `https://passeport-cognitif-mvp.onrender.com/dashboard/${userId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { user?: string };
}) {
  const userId = searchParams.user || "1"; // fallback

  let data: DashboardData;

  try {
    data = await getDashboard(userId);
  } catch (error) {
    return <div>Erreur API</div>;
  }

  return (
    <div>
      <h1>Passeport Cognitif</h1>

      <p>Utilisateur : {userId}</p>

      <h2>Profil</h2>
      <p>Niveau actuel : {data.profile.current_level}</p>
      <p>Objectif : {data.profile.target_level}</p>
      <p>Progression : {data.profile.progress_score}%</p>
      <p>Confiance : {data.profile.confidence_score}%</p>
      <p>Engagement : {data.profile.engagement_score}%</p>

      <h2>Indicateurs</h2>
      {data.indicators.map((ind, i) => (
        <p key={i}>
          {ind.name} : {ind.value} ({ind.interpretation})
        </p>
      ))}

      <h2>Recommandations</h2>
      {data.recommendations.map((rec, i) => (
        <div key={i}>
          <p>{rec.recommended_module}</p>
          <p>Priorité : {rec.priority}</p>
          <p>Raison : {rec.rationale}</p>
        </div>
      ))}
    </div>
  );
}
