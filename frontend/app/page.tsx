import "./dashboard.css";
import IndicatorList from "./components/IndicatorList";
import MetricCard from "./components/MetricCard";
import RecommendationCard from "./components/RecommendationCard";
import UserSwitch from "./components/UserSwitch";
import WorkflowExplainer from "./components/WorkflowExplainer";

type DashboardData = {
  user_id: number;
  name: string;
  level: string;
  target_role: string;
  progression_score: number;
  confidence_score: number;
  engagement_score: number;
  indicators: string[];
  recommendations: string[];
};

const BACKEND_URL =
  process.env.BACKEND_URL ?? "https://passeport-cognitif-mvp.onrender.com";

async function getDashboardData(userId: string): Promise<DashboardData> {
  const response = await fetch(`${BACKEND_URL}/dashboard/${userId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return response.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ user?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const userId = resolvedSearchParams?.user === "2" ? "2" : "1";
  const data = await getDashboardData(userId);

  return (
    <main className="dashboard-page">
      <section className="hero-card">
        <div>
          <p className="hero-card__eyebrow">Passeport Cognitif MVP</p>
          <h1>Profil apprenant dynamique</h1>
          <p className="hero-card__description">
            Démonstrateur MVP centré sur des données observables, des
            indicateurs interprétables et des recommandations pédagogiques
            utiles pour la progression.
          </p>
        </div>

        <div className="hero-card__actions">
          <UserSwitch currentUser={userId} />
        </div>
      </section>

      <WorkflowExplainer userId={userId} />

      <section className="profile-summary-card">
        <div className="profile-summary-card__header">
          <div>
            <p className="section-label">Profil affiché</p>
            <h2>{data.name}</h2>
          </div>
          <span className="profile-badge">{data.level}</span>
        </div>

        <div className="profile-summary-card__meta">
          <div>
            <span className="meta-label">Objectif</span>
            <strong>{data.target_role}</strong>
          </div>
          <div>
            <span className="meta-label">Utilisateur</span>
            <strong>{data.user_id}</strong>
          </div>
        </div>
      </section>

      <section className="metrics-grid">
        <MetricCard
          label="Progression"
          value={data.progression_score}
          helper="Avancement observable dans le parcours"
        />
        <MetricCard
          label="Confiance"
          value={data.confidence_score}
          helper="Niveau de maîtrise perçu sur les tâches"
        />
        <MetricCard
          label="Engagement"
          value={data.engagement_score}
          helper="Régularité et implication dans l’apprentissage"
        />
      </section>

      <section className="content-grid">
        <div className="content-card">
          <p className="section-label">Indicateurs clés</p>
          <h2>Lecture interprétable du profil</h2>
          <IndicatorList indicators={data.indicators} />
        </div>

        <div className="content-card">
          <p className="section-label">Recommandations</p>
          <h2>Actions pédagogiques proposées</h2>
          <RecommendationCard recommendations={data.recommendations} />
        </div>
      </section>
    </main>
  );
}
