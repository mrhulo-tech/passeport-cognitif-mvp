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
    throw new Error("Erreur API");
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
    <div
      style={{
        width: "100%",
        background: "#e5e7eb",
        borderRadius: 999,
        overflow: "hidden",
        height: 12,
        marginTop: 8,
      }}
    >
      <div
        style={{
          width: `${value}%`,
          background: color,
          height: "100%",
          borderRadius: 999,
        }}
      />
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
};

const metricCardStyle: React.CSSProperties = {
  ...cardStyle,
  minHeight: 120,
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { user?: string };
}) {
  const userId = searchParams?.user || "1";
  const data = await getDashboard(userId);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            color: "#ffffff",
            marginBottom: 24,
          }}
        >
          <p style={{ margin: 0, opacity: 0.8, fontSize: 14 }}>
            Passeport Cognitif
          </p>
          <h1 style={{ margin: "10px 0 8px 0", fontSize: 36 }}>
            Profil d’apprentissage dynamique
          </h1>
          <p style={{ margin: 0, maxWidth: 700, lineHeight: 1.6 }}>
            Visualisation MVP d’un profil apprenant fondé sur des données
            observables, des indicateurs interprétables et des recommandations
            pédagogiques personnalisées.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div style={cardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Profil apprenant
            </p>
            <h2 style={{ margin: "10px 0 18px 0", fontSize: 28 }}>
              Utilisateur {data.profile.user_id}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <div>
                <p style={{ margin: "0 0 6px 0", color: "#64748b" }}>
                  Domaine
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  {data.profile.domain}
                </p>
              </div>
              <div>
                <p style={{ margin: "0 0 6px 0", color: "#64748b" }}>
                  Niveau actuel
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  {data.profile.current_level}
                </p>
              </div>
              <div>
                <p style={{ margin: "0 0 6px 0", color: "#64748b" }}>
                  Objectif
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  {data.profile.target_level}
                </p>
              </div>
              <div>
                <p style={{ margin: "0 0 6px 0", color: "#64748b" }}>
                  Statut
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  Profil interprétable actif
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Navigation démo
            </p>
            <h3 style={{ margin: "10px 0 14px 0" }}>Changer d’utilisateur</h3>
            <p style={{ marginTop: 0, color: "#475569", lineHeight: 1.5 }}>
              Utilise directement les URLs suivantes pour comparer les profils.
            </p>
            <div style={{ display: "grid", gap: 10 }}>
              <a
                href="/?user=1"
                style={{
                  display: "block",
                  padding: 12,
                  borderRadius: 12,
                  background: userId === "1" ? "#dbeafe" : "#f1f5f9",
                  color: "#0f172a",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Utilisateur 1
              </a>
              <a
                href="/?user=2"
                style={{
                  display: "block",
                  padding: 12,
                  borderRadius: 12,
                  background: userId === "2" ? "#dbeafe" : "#f1f5f9",
                  color: "#0f172a",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Utilisateur 2
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div style={metricCardStyle}>
            <p style={{ margin: 0, color: "#64748b" }}>Progression</p>
            <h3 style={{ margin: "10px 0 0 0", fontSize: 30 }}>
              {data.profile.progress_score}%
            </h3>
            {progressBar(data.profile.progress_score, "#2563eb")}
          </div>

          <div style={metricCardStyle}>
            <p style={{ margin: 0, color: "#64748b" }}>Confiance</p>
            <h3 style={{ margin: "10px 0 0 0", fontSize: 30 }}>
              {data.profile.confidence_score}%
            </h3>
            {progressBar(data.profile.confidence_score, "#16a34a")}
          </div>

          <div style={metricCardStyle}>
            <p style={{ margin: 0, color: "#64748b" }}>Engagement</p>
            <h3 style={{ margin: "10px 0 0 0", fontSize: 30 }}>
              {data.profile.engagement_score}%
            </h3>
            {progressBar(data.profile.engagement_score, "#f59e0b")}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 24,
          }}
        >
          <div style={cardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Indicateurs interprétables
            </p>
            <h3 style={{ margin: "10px 0 18px 0", fontSize: 24 }}>
              Forces et axes d’amélioration
            </h3>

            <div style={{ display: "grid", gap: 18 }}>
              {data.indicators.map((indicator, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <strong>{translateIndicator(indicator.name)}</strong>
                    <span style={{ color: "#475569" }}>{indicator.value}%</span>
                  </div>
                  {progressBar(
                    indicator.value,
                    indicator.interpretation === "to_improve"
                      ? "#ef4444"
                      : "#2563eb"
                  )}
                  <p style={{ margin: "8px 0 0 0", color: "#64748b" }}>
                    {translateInterpretation(indicator.interpretation)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Recommandations personnalisées
            </p>
            <h3 style={{ margin: "10px 0 18px 0", fontSize: 24 }}>
              Prochaines actions proposées
            </h3>

            <div style={{ display: "grid", gap: 16 }}>
              {data.recommendations.map((rec, i) => (
                <div
                  key={i}
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <p style={{ margin: "0 0 8px 0", fontWeight: 700 }}>
                    {rec.recommended_module}
                  </p>
                  <p style={{ margin: "0 0 6px 0" }}>
                    <strong>Priorité :</strong> {rec.priority}
                  </p>
                  <p style={{ margin: 0, color: "#475569", lineHeight: 1.5 }}>
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
