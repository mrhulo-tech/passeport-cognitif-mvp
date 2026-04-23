
type MetricCardProps = {
  label: string;
  value: number;
  color: string;
};

function ProgressBar({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
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

export default function MetricCard({
  label,
  value,
  color,
}: MetricCardProps) {
  return (
    <div className="dashboard-card dashboard-metric-card">
      <p className="dashboard-metric-label">{label}</p>
      <h3 className="dashboard-metric-value">{value}%</h3>
      <ProgressBar value={value} color={color} />
    </div>
  );
}
