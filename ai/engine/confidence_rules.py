def compute_confidence_score(completion_rate: float, retry_rate: float):
    return round((completion_rate * 0.7 + (1 - retry_rate) * 0.3) * 100, 2)
