
type RecommendationCardProps = {
  module: string;
  priority: string;
  rationale: string;
};

export default function RecommendationCard({
  module,
  priority,
  rationale,
}: RecommendationCardProps) {
  return (
    <div className="dashboard-recommendation-card">
      <p className="dashboard-recommendation-title">{module}</p>
      <p className="dashboard-recommendation-priority">
        <strong>Priorité :</strong> {priority}
      </p>
      <p className="dashboard-recommendation-text">{rationale}</p>
    </div>
  );
}
