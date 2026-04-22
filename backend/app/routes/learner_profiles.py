from fastapi import APIRouter
from app.services.learner_profile_service import get_learner_profile

router = APIRouter()


@router.get("/{user_id}")
def learner_profile(user_id: int):
    return get_learner_profile(user_id)
