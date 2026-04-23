const readinessItems = [
  "Structure produit déjà démontrable",
  "Différenciation multi-utilisateur active",
  "Narratif de progression désormais plus explicite",
];

export default function SprintReadinessCard() {
  return (
    <section className="content-card sprint-readiness-card">
      <p className="section-label">Sprint readiness</p>
      <h2>Base utile pour les 2 premières semaines</h2>
      <ul className="sprint-readiness-card__list">
        {readinessItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
