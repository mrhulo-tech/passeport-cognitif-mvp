def determine_current_level(score: float):
    if score >= 85:
        return "B2"
    if score >= 70:
        return "B1+"
    if score >= 55:
        return "B1"
    return "A2"
