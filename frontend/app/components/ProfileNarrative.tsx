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
        Le tableau de bord ne produit pas une mesure fixe de capacité, mais une
        lecture évolutive de la progression à partir de données observables.
      </p>
      <p>
        Cette lecture sert à prioriser les prochaines actions pédagogiques,
        soutenir les décisions d’accompagnement et rendre la progression plus
        visible pour l’apprenant comme pour l’équipe.
      </p>
    </section>
  );
}
