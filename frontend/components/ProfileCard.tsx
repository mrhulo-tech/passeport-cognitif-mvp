type Profile = {
  user_id: number;
  domain: string;
  current_level: string;
  target_level: string;
  progress_score: number;
  confidence_score: number;
  engagement_score: number;
};

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <section>
      <h2>Profil apprenant</h2>
      <p>Utilisateur #{profile.user_id}</p>
      <p>Domaine : {profile.domain}</p>
      <p>Niveau actuel : {profile.current_level}</p>
      <p>Niveau cible : {profile.target_level}</p>
      <p>Progression : {profile.progress_score} / 100</p>
    </section>
  );
}
