from fastapi import APIRouter
from app.services.indicator_service import compute_indicators

router = APIRouter()


@router.get("/")
def get_indicators():
    return compute_indicators()
