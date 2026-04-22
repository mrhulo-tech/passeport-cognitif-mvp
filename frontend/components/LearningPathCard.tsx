type Recommendation = {
  user_id: number;
  recommended_module: string;
  priority: string;
  rationale: string;
};

export default function LearningPathCard({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  const firstRecommendation = recommendations[0];

  return (
    <section>
      <h2>Parcours recommandé</h2>
      <p>
        {firstRecommendation
          ? firstRecommendation.recommended_module
          : "Aucune recommandation"}
      </p>
    </section>
  );
}
