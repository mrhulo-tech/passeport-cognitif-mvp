from fastapi import APIRouter
from app.services.task_result_service import list_task_results

router = APIRouter()


@router.get("/{user_id}")
def task_results(user_id: int):
    return list_task_results(user_id)
