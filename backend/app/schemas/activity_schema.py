from pydantic import BaseModel


class ActivitySchema(BaseModel):
    type: str
    result: float
    timestamp: str
