const nextSteps = [
  "Rendre les sources de données plus visibles",
  "Renforcer la logique d’évaluation par tâches",
  "Préparer une narration de démo pour équipe et partenaires",
];

export default function NextStepPanel() {
  return (
    <section className="content-card next-step-panel">
      <p className="section-label">Suite du build</p>
      <h2>Prochaines améliorations utiles</h2>
      <ul className="next-step-panel__list">
        {nextSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </section>
  );
}
