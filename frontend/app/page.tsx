import DashboardHeader from "../components/DashboardHeader";
import ProfileCard from "../components/ProfileCard";
import IndicatorCard from "../components/IndicatorCard";
import RecommendationList from "../components/RecommendationList";
import ProgressTimeline from "../components/ProgressTimeline";
import EvidenceList from "../components/EvidenceList";
import LearningPathCard from "../components/LearningPathCard";
import ConfidenceCard from "../components/ConfidenceCard";
import EngagementCard from "../components/EngagementCard";
import TaskResultTable from "../components/TaskResultTable";
import { fetchDashboard } from "../lib/api";
import { DEFAULT_USER_ID } from "../lib/constants";

export default async function HomePage() {
  const dashboard = await fetchDashboard(DEFAULT_USER_ID);

  return (
    <main style={{ padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <DashboardHeader />
      <ProfileCard profile={dashboard.profile} />
      <IndicatorCard indicators={dashboard.indicators} />
      <RecommendationList recommendations={dashboard.recommendations} />
      <LearningPathCard recommendations={dashboard.recommendations} />
      <ConfidenceCard profile={dashboard.profile} />
      <EngagementCard profile={dashboard.profile} />
      <ProgressTimeline />
      <EvidenceList />
      <TaskResultTable />
    </main>
  );
}
