def compute_engagement_score(session_count: int, average_time: float):
    return min(100, round(session_count * 5 + average_time * 2, 2))
