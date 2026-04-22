import ProfileCard from "../components/ProfileCard";
import IndicatorCard from "../components/IndicatorCard";
import RecommendationList from "../components/RecommendationList";
import ProgressTimeline from "../components/ProgressTimeline";

export default function HomePage() {
  return (
    <main style={{ padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <h1>Passeport Cognitif – MVP</h1>
      <p>Profil d’apprentissage, indicateurs et recommandations.</p>
      <ProfileCard />
      <IndicatorCard />
      <RecommendationList />
      <ProgressTimeline />
    </main>
  );
}
