type IndicatorInterpretationPanelProps = {
  indicators: string[];
};

export default function IndicatorInterpretationPanel({
  indicators,
}: IndicatorInterpretationPanelProps) {
  const first = indicators[0] ?? "Aucun indicateur disponible.";
  const second = indicators[1] ?? "Aucun indicateur secondaire disponible.";

  return (
    <section className="content-card indicator-interpretation-panel">
      <p className="section-label">Interprétation</p>
      <h2>Points de lecture immédiats</h2>
      <div className="indicator-interpretation-panel__stack">
        <article>
          <span>Signal principal</span>
          <p>{first}</p>
        </article>
        <article>
          <span>Signal secondaire</span>
          <p>{second}</p>
        </article>
      </div>
    </section>
  );
}
