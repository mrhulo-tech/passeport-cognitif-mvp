from fastapi import APIRouter
from app.services.progression_service import get_progression_events

router = APIRouter()


@router.get("/{user_id}")
def progression(user_id: int):
    return get_progression_events(user_id)
