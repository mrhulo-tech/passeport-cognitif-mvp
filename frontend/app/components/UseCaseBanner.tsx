type UseCaseBannerProps = {
  targetRole: string;
};

export default function UseCaseBanner({ targetRole }: UseCaseBannerProps) {
  return (
    <section className="use-case-banner">
      <strong>Cas d’usage actif :</strong> personnalisation d’un parcours lié à{" "}
      {targetRole}, avec suivi de progression, lecture d’indicateurs et
      recommandations ciblées.
    </section>
  );
}
