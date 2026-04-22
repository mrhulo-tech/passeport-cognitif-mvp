def get_progression_events(user_id: int):
    return [
        {"user_id": user_id, "event_type": "diagnostic", "delta": 0, "timestamp": "2026-04-01"},
        {"user_id": user_id, "event_type": "oral_task", "delta": 6, "timestamp": "2026-04-08"},
        {"user_id": user_id, "event_type": "listening_task", "delta": 4, "timestamp": "2026-04-15"},
    ]
