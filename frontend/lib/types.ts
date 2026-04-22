export type Profile = {
  user_id: number;
  domain: string;
  current_level: string;
  target_level: string;
  progress_score: number;
  confidence_score: number;
  engagement_score: number;
};

export type Indicator = {
  name: string;
  value: number;
  interpretation: string;
};

export type Recommendation = {
  user_id: number;
  recommended_module: string;
  priority: string;
  rationale: string;
};

export type Dashboard = {
  profile: Profile;
  indicators: Indicator[];
  recommendations: Recommendation[];
};
