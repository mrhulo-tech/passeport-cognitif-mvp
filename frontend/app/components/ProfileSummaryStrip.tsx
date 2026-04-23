type ProfileSummaryStripProps = {
  name: string;
  level: string;
  targetRole: string;
};

export default function ProfileSummaryStrip({
  name,
  level,
  targetRole,
}: ProfileSummaryStripProps) {
  return (
    <section className="profile-summary-strip">
      <div>
        <span>Profil</span>
        <strong>{name}</strong>
      </div>
      <div>
        <span>Niveau</span>
        <strong>{level}</strong>
      </div>
      <div>
        <span>Cible</span>
        <strong>{targetRole}</strong>
      </div>
    </section>
  );
}
