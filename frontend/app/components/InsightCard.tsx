type InsightCardProps = {
  title: string;
  description: string;
};

export default function InsightCard({
  title,
  description,
}: InsightCardProps) {
  return (
    <article className="insight-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
