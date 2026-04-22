def compute_progress_score(skill_scores):
    if not skill_scores:
        return 0
    return sum(skill_scores) / len(skill_scores)
