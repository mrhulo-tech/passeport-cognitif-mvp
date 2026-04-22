from fastapi import APIRouter
from app.services.profile_service import get_profile_summary

router = APIRouter()


@router.get("/{user_id}")
def get_profile(user_id: int):
    return get_profile_summary(user_id)
