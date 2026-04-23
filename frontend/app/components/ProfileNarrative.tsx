type ProfileNarrativeProps = {
  name: string;
  level: string;
  targetRole: string;
};

export default function ProfileNarrative({
  name,
  level,
  targetRole,
}: ProfileNarrativeProps) {
  return (
    <section className="content-card profile-narrative">
      <p className="section-label">Narratif produit</p>
      <h2>Résumé du profil</h2>
      <p>
        <strong>{name}</strong> présente actuellement un profil de niveau{" "}
        <strong>{level}</strong>, orienté vers <strong>{targetRole}</strong>.
      </p>
      <p>
        Dans le cadre de la formation linguistique professionnelle, cette vue
        sert à documenter une progression observable, à prioriser les besoins
        d’accompagnement et à recommander les prochaines actions utiles dans le
        parcours.
      </p>
      <p>
        Le système ne produit pas une mesure fixe de capacité. Il propose une
        lecture évolutive du parcours à partir de données pédagogiques
        interprétables.
      </p>
    </section>
  );
}
