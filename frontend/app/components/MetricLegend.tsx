const metricDefinitions = [
  {
    label: "Progression",
    description:
      "Mesure l’avancement observable dans le parcours linguistique et la réalisation des activités attendues.",
  },
  {
    label: "Confiance",
    description:
      "Reflète la stabilité perçue sur les tâches de communication réalisées et la mobilisation des acquis.",
  },
  {
    label: "Engagement",
    description:
      "Documente la régularité, l’implication et la continuité dans le parcours d’apprentissage.",
  },
];

export default function MetricLegend() {
  return (
    <section className="content-card metric-legend">
      <p className="section-label">Référentiel des indicateurs</p>
      <h2>Comment lire les métriques</h2>
      <div className="metric-legend__grid">
        {metricDefinitions.map((item) => (
          <article key={item.label} className="metric-legend__item">
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
