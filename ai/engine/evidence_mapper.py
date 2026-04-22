def map_activity_to_evidence(activity_type: str):
    mapping = {
        "oral_task": "spoken_performance",
        "quiz": "knowledge_check",
        "simulation": "task_based_assessment",
    }
    return mapping.get(activity_type, "generic_evidence")
