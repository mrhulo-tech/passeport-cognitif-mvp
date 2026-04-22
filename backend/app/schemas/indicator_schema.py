from pydantic import BaseModel


class IndicatorSchema(BaseModel):
    name: str
    value: float
    interpretation: str
