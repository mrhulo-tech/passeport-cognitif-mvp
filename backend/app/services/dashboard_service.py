from app.services.learner_profile_service import get_learner_profile
from app.services.learning_path_service import get_learning_path
from app.services.indicator_service import compute_indicators


def get_dashboard(user_id: int):
    return {
        "profile": get_learner_profile(user_id),
        "indicators": compute_indicators(),
        "recommendations": get_learning_path(user_id),
    }
