type RecommendationPriorityProps = {
  recommendations: string[];
};

export default function RecommendationPriority({
  recommendations,
}: RecommendationPriorityProps) {
  const primaryRecommendation = recommendations[0] ?? "Aucune recommandation disponible.";
  const secondaryRecommendation = recommendations[1] ?? "Aucune action secondaire disponible.";

  return (
    <section className="content-card recommendation-priority">
      <p className="section-label">Priorisation</p>
      <h2>Actions à lancer en premier</h2>
      <div className="recommendation-priority__stack">
        <article className="recommendation-priority__item">
          <span>Priorité 1</span>
          <p>{primaryRecommendation}</p>
        </article>
        <article className="recommendation-priority__item">
          <span>Priorité 2</span>
          <p>{secondaryRecommendation}</p>
        </article>
      </div>
    </section>
  );
}
