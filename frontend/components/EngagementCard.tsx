type Profile = {
  engagement_score: number;
};

export default function EngagementCard({ profile }: { profile: Profile }) {
  return (
    <section>
      <h2>Engagement</h2>
      <p>{profile.engagement_score} / 100</p>
    </section>
  );
}
