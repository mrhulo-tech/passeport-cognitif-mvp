from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Passeport Cognitif API running"}

@app.get("/dashboard/{user_id}")
def get_dashboard(user_id: int):

    if user_id == 1:
        return {
            "profile": {
                "user_id": 1,
                "domain": "langue_seconde",
                "current_level": "B1",
                "target_level": "B2",
                "progress_score": 68,
                "confidence_score": 62,
                "engagement_score": 81
            },
            "indicators": [
                {"name": "oral_expression", "value": 54, "interpretation": "to_improve"},
                {"name": "listening_comprehension", "value": 78, "interpretation": "stable"}
            ],
            "recommendations": [
                {
                    "user_id": 1,
                    "recommended_module": "oral-professionnel-niveau-2",
                    "priority": "high",
                    "rationale": "expression_orale_below_target"
                }
            ]
        }

    elif user_id == 2:
        return {
            "profile": {
                "user_id": 2,
                "domain": "langue_seconde",
                "current_level": "B2",
                "target_level": "C1",
                "progress_score": 82,
                "confidence_score": 75,
                "engagement_score": 60
            },
            "indicators": [
                {"name": "oral_expression", "value": 80, "interpretation": "stable"},
                {"name": "listening_comprehension", "value": 65, "interpretation": "to_improve"}
            ],
            "recommendations": [
                {
                    "user_id": 2,
                    "recommended_module": "listening-avance",
                    "priority": "medium",
                    "rationale": "listening_below_target"
                }
            ]
        }

    return {"error": "User not found"}
