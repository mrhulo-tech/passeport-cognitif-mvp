from pydantic import BaseModel


class TaskResultSchema(BaseModel):
    user_id: int
    task_type: str
    score: float
    completion_time: int
    feedback: str
