type Profile = {
  confidence_score: number;
};

export default function ConfidenceCard({ profile }: { profile: Profile }) {
  return (
    <section>
      <h2>Confiance en interaction</h2>
      <p>{profile.confidence_score} / 100</p>
    </section>
  );
}
