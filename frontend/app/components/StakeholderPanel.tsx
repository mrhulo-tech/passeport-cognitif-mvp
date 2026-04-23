const stakeholderItems = [
  "Équipe de développement",
  "Partenaires de formation",
  "Décideurs intéressés par la personnalisation des parcours",
];

export default function StakeholderPanel() {
  return (
    <section className="content-card stakeholder-panel">
      <p className="section-label">Publics cibles</p>
      <h2>Pour qui cette lecture est utile</h2>
      <ul className="stakeholder-panel__list">
        {stakeholderItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
