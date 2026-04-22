def list_task_results(user_id: int):
    return [
        {
            "user_id": user_id,
            "task_type": "oral_simulation",
            "score": 0.62,
            "completion_time": 12,
            "feedback": "needs_more_precision",
        },
        {
            "user_id": user_id,
            "task_type": "listening_quiz",
            "score": 0.80,
            "completion_time": 8,
            "feedback": "good_comprehension",
        },
    ]
