type Recommendation = {
  user_id: number;
  recommended_module: string;
  priority: string;
  rationale: string;
};

export default function RecommendationList({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  return (
    <section>
      <h2>Recommandations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={`${recommendation.recommended_module}-${index}`}>
            {recommendation.recommended_module} — priorité {recommendation.priority}
          </li>
        ))}
      </ul>
    </section>
  );
}
