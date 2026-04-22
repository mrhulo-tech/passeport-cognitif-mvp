class LearnerProfile:
    def __init__(
        self,
        user_id,
        domain,
        current_level,
        target_level,
        progress_score,
        confidence_score,
        engagement_score,
    ):
        self.user_id = user_id
        self.domain = domain
        self.current_level = current_level
        self.target_level = target_level
        self.progress_score = progress_score
        self.confidence_score = confidence_score
        self.engagement_score = engagement_score
