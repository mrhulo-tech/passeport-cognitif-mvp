type WorkflowExplainerProps = {
  userId: string;
};

const userContextMap: Record<string, string> = {
  "1": "Utilisateur 1 : progression orientée communication professionnelle et consolidation linguistique.",
  "2": "Utilisateur 2 : progression orientée autonomie, structuration et préparation à des tâches plus complexes.",
};

const workflowSteps = [
  {
    title: "1. Données observables",
    description:
      "Le profil repose sur des traces d’apprentissage concrètes : progression, complétion, régularité, résultats à des tâches et signaux utiles issus du parcours LMS.",
  },
  {
    title: "2. Indicateurs interprétables",
    description:
      "Les données sont transformées en indicateurs lisibles pour guider l’action pédagogique. Ils servent à documenter une progression observable, pas à produire un score opaque de type psychométrique.",
  },
  {
    title: "3. Recommandations pédagogiques",
    description:
      "Le système propose ensuite des actions utiles : priorités d’apprentissage, prochaines activités et pistes d’accompagnement adaptées au profil observé.",
  },
];

export default function WorkflowExplainer({
  userId,
}: WorkflowExplainerProps) {
  const context =
    userContextMap[userId] ??
    "Profil apprenant dynamique basé sur des données observables et une logique de recommandation pédagogique.";

  return (
    <section className="workflow-explainer">
      <div className="workflow-explainer__header">
        <span className="workflow-explainer__eyebrow">
          Logique du produit
        </span>
        <h2>Comment le MVP produit un profil utile</h2>
        <p>
          Le passeport cognitif présenté ici correspond à un profil d’apprentissage
          dynamique. Il ne mesure pas une intelligence “objective” : il organise
          des données observables, des indicateurs interprétables et des
          recommandations pédagogiques.
        </p>
      </div>

      <div className="workflow-explainer__context">
        <strong>Lecture du cas affiché :</strong> {context}
      </div>

      <div className="workflow-explainer__grid">
        {workflowSteps.map((step) => (
          <article key={step.title} className="workflow-step-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
