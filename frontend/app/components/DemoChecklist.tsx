const items = [
  "Le profil change selon l’utilisateur sélectionné",
  "Les indicateurs restent lisibles et interprétables",
  "Les recommandations découlent d’une logique explicite",
  "Le positionnement éthique du MVP est visible dans l’interface",
];

export default function DemoChecklist() {
  return (
    <section className="content-card demo-checklist">
      <p className="section-label">Checklist démo</p>
      <h2>Ce que la page permet déjà de montrer</h2>
      <ul className="demo-checklist__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
