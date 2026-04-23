const timelineSteps = [
  "Collecte des données du parcours LMS",
  "Calcul d’indicateurs lisibles",
  "Interprétation pédagogique du profil",
  "Proposition d’actions personnalisées",
];

export default function TimelinePreview() {
  return (
    <section className="content-card timeline-preview">
      <p className="section-label">Chaîne de traitement</p>
      <h2>Vue simplifiée du workflow</h2>
      <ol className="timeline-preview__list">
        {timelineSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
