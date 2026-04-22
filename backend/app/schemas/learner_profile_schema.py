from pydantic import BaseModel


class LearnerProfileSchema(BaseModel):
    user_id: int
    domain: str
    current_level: str
    target_level: str
    progress_score: float
    confidence_score: float
    engagement_score: float
