const readouts = [
  {
    title: "Valeur pour un partenaire formation",
    description:
      "Visualiser rapidement comment les données du parcours linguistique se transforment en décisions pédagogiques concrètes.",
  },
  {
    title: "Valeur pour une équipe produit",
    description:
      "Montrer une chaîne fonctionnelle simple entre collecte, interprétation et recommandation dans le LMS.",
  },
  {
    title: "Valeur pour un contexte fédéral",
    description:
      "Présenter un outil de progression compréhensible, prudent et utile pour des parcours liés à la communication professionnelle.",
  },
];

export default function PartnerReadout() {
  return (
    <section className="content-card partner-readout">
      <p className="section-label">Lecture partenaire</p>
      <h2>Pourquoi ce MVP est démontrable</h2>
      <div className="partner-readout__grid">
        {readouts.map((item) => (
          <article key={item.title} className="partner-readout__item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
