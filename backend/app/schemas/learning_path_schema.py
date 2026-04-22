from pydantic import BaseModel


class LearningPathSchema(BaseModel):
    user_id: int
    recommended_module: str
    priority: str
    rationale: str
