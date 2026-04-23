type UseCaseBannerProps = {
  targetRole: string;
};

export default function UseCaseBanner({ targetRole }: UseCaseBannerProps) {
  return (
    <section className="use-case-banner">
      <p>
        <strong>Cas d’usage principal :</strong> personnalisation d’un parcours
        de langue seconde pour un contexte professionnel fédéral.
      </p>
      <p>
        <strong>Objectif métier :</strong> relier les données du parcours, les
        indicateurs visibles et les recommandations pour soutenir la progression
        vers des tâches liées à <strong>{targetRole}</strong>.
      </p>
    </section>
  );
}
