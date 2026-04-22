from fastapi import APIRouter
from app.services.learning_path_service import get_learning_path

router = APIRouter()


@router.get("/{user_id}")
def learning_path(user_id: int):
    return get_learning_path(user_id)
