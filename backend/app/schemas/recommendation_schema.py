from pydantic import BaseModel


class RecommendationSchema(BaseModel):
    type: str
    priority: str
