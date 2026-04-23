type Indicator = {
  name: string;
  value: number;
  interpretation: string;
};

type IndicatorListProps = {
  indicators: Indicator[];
  translateIndicator: (name: string) => string;
  translateInterpretation: (value: string) => string;
};

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

export default function IndicatorList({
  indicators,
  translateIndicator,
  translateInterpretation,
}: IndicatorListProps) {
  return (
    <div className="dashboard-list">
      {indicators.map((indicator, i) => (
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
            indicator.interpretation === "to_improve" ? "#ef4444" : "#2563eb"
          )}
          <p className="dashboard-indicator-note">
            {translateInterpretation(indicator.interpretation)}
          </p>
        </div>
      ))}
    </div>
  );
}
