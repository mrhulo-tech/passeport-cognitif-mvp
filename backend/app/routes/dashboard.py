from fastapi import APIRouter
from app.services.dashboard_service import get_dashboard

router = APIRouter()


@router.get("/{user_id}")
def dashboard(user_id: int):
    return get_dashboard(user_id)
