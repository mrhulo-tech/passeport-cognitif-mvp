type Indicator = {
  name: string;
  value: number;
  interpretation: string;
};

export default function IndicatorCard({
  indicators,
}: {
  indicators: Indicator[];
}) {
  return (
    <section>
      <h2>Indicateurs</h2>
      <ul>
        {indicators.map((indicator) => (
          <li key={indicator.name}>
            {indicator.name} : {indicator.value} ({indicator.interpretation})
          </li>
        ))}
      </ul>
    </section>
  );
}
