const nextSteps = [
  "Rendre les sources de données plus visibles",
  "Renforcer la logique d’évaluation par tâches",
  "Préparer une narration de démo plus compacte",
  "Passer ensuite à une amélioration UX/UI via Figma et Codex",
];

export default function NextStepPanel() {
  return (
    <section className="content-card next-step-panel">
      <p className="section-label">Étape suivante</p>
      <h2>Ce qu’il restera à améliorer après ce MVP maximal</h2>
      <ul className="next-step-panel__list">
        {nextSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </section>
  );
}
