Contenu
import "./dashboard.css";

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
    throw new Error(`Erreur API: ${res.status}`);
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
  if (value === "listening_below_target") {
    return "Votre compréhension orale est en dessous du niveau cible";
  }
  return value;
}

function progressBar(value: number, color: string) {
  return (
    <div className="dashboard-progress">
      <div
        className="dashboard-progress-fill"
        style={{
          width: `${value}%`,
          background: color,
        }}
      />
    </div>
  );
}

function UserLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <a
      href={href}
      className={`dashboard-user-link${active ? " active" : ""}`}
    >
      {label}
    </a>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { user?: string };
}) {
  const rawUserId = searchParams?.user;
  const userId = rawUserId === "2" ? "2" : "1";

  let data: DashboardData | null = null;
  let errorMessage = "";

  try {
    data = await getDashboard(userId);
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Erreur inconnue lors du chargement du dashboard";
  }

  if (!data) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <div className="dashboard-card dashboard-hero">
            <p className="dashboard-eyebrow">Passeport Cognitif</p>
            <h1 className="dashboard-hero-title">
              Profil d’apprentissage dynamique
            </h1>
            <p className="dashboard-hero-text">
              Visualisation MVP d’un profil apprenant fondé sur des données
              observables, des indicateurs interprétables et des recommandations
              pédagogiques personnalisées.
            </p>
          </div>

          <div className="dashboard-card">
            <p className="dashboard-section-label">Erreur de chargement</p>
            <h2 className="dashboard-section-title">
              Le dashboard n’a pas pu être chargé
            </h2>
            <p className="dashboard-switch-text">
              Le frontend reste en mode server-side fetch, mais le backend n’a
              pas répondu correctement pour cet utilisateur.
            </p>

            <div className="dashboard-error-box">{errorMessage}</div>

            <div className="dashboard-error-links">
              <UserLink
                href="/?user=1"
                active={userId === "1"}
                label="Utilisateur 1"
              />
              <UserLink
                href="/?user=2"
                active={userId === "2"}
                label="Utilisateur 2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-card dashboard-hero">
          <p className="dashboard-eyebrow">Passeport Cognitif</p>
          <h1 className="dashboard-hero-title">
            Profil d’apprentissage dynamique
          </h1>
          <p className="dashboard-hero-text">
            Visualisation MVP d’un profil apprenant fondé sur des données
            observables, des indicateurs interprétables et des recommandations
            pédagogiques personnalisées. Cette démonstration compare plusieurs
            profils utilisateurs sans inférence opaque ni scoring pseudo-scientifique.
          </p>
        </div>

        <div className="dashboard-grid-top">
          <div className="dashboard-card">
            <p className="dashboard-section-label">Profil apprenant</p>
            <h2 className="dashboard-section-title">
              Utilisateur {data.profile.user_id}
            </h2>

            <div className="dashboard-profile-grid">
              <div>
                <p className="dashboard-field-label">Domaine</p>
                <p className="dashboard-field-value">{data.profile.domain}</p>
              </div>
              <div>
                <p className="dashboard-field-label">Niveau actuel</p>
                <p className="dashboard-field-value">
                  {data.profile.current_level}
                </p>
              </div>
              <div>
                <p className="dashboard-field-label">Objectif</p>
                <p className="dashboard-field-value">
                  {data.profile.target_level}
                </p>
              </div>
              <div>
                <p className="dashboard-field-label">Statut</p>
                <p className="dashboard-field-value">
                  Profil interprétable actif
                </p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <p className="dashboard-section-label">Navigation démo</p>
            <h3 className="dashboard-subtitle">Changer d’utilisateur</h3>
            <p className="dashboard-switch-text">
              Compare les profils avec les URLs server-side existantes.
            </p>
            <div className="dashboard-switch-grid">
              <UserLink
                href="/?user=1"
                active={userId === "1"}
                label="Utilisateur 1"
              />
              <UserLink
                href="/?user=2"
                active={userId === "2"}
                label="Utilisateur 2"
              />
            </div>
          </div>
        </div>

        <div className="dashboard-grid-metrics">
          <div className="dashboard-card dashboard-metric-card">
            <p className="dashboard-metric-label">Progression</p>
            <h3 className="dashboard-metric-value">
              {data.profile.progress_score}%
            </h3>
            {progressBar(data.profile.progress_score, "#2563eb")}
          </div>

          <div className="dashboard-card dashboard-metric-card">
            <p className="dashboard-metric-label">Confiance</p>
            <h3 className="dashboard-metric-value">
              {data.profile.confidence_score}%
            </h3>
            {progressBar(data.profile.confidence_score, "#16a34a")}
          </div>

          <div className="dashboard-card dashboard-metric-card">
            <p className="dashboard-metric-label">Engagement</p>
            <h3 className="dashboard-metric-value">
              {data.profile.engagement_score}%
            </h3>
            {progressBar(data.profile.engagement_score, "#f59e0b")}
          </div>
        </div>

        <div className="dashboard-grid-main">
          <div className="dashboard-card">
            <p className="dashboard-section-label">Indicateurs interprétables</p>
            <h3 className="dashboard-subtitle">
              Forces et axes d’amélioration
            </h3>

            <div className="dashboard-list">
              {data.indicators.map((indicator, i) => (
                <div key={i}>
                  <div className="dashboard-indicator-head">
                    <strong className="dashboard-indicator-label">
                      {translateIndicator(indicator.name)}
                    </strong>
                    <span className="dashboard-indicator-value">
                      {indicator.value}%
                    </span>
                  </div>
                  {progressBar(
                    indicator.value,
                    indicator.interpretation === "to_improve"
                      ? "#ef4444"
                      : "#2563eb"
                  )}
                  <p className="dashboard-indicator-note">
                    {translateInterpretation(indicator.interpretation)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card">
            <p className="dashboard-section-label">
              Recommandations personnalisées
            </p>
            <h3 className="dashboard-subtitle">
              Prochaines actions proposées
            </h3>

            <div className="dashboard-recommendations">
              {data.recommendations.map((rec, i) => (
                <div key={i} className="dashboard-recommendation-card">
                  <p className="dashboard-recommendation-title">
                    {rec.recommended_module}
                  </p>
                  <p className="dashboard-recommendation-priority">
                    <strong>Priorité :</strong> {rec.priority}
                  </p>
                  <p className="dashboard-recommendation-text">
                    {translateRationale(rec.rationale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
