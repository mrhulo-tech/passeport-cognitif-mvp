from pydantic import BaseModel


class ProfileSchema(BaseModel):
    user_id: int
    current_level: str
    target_level: str
    progress_score: float
