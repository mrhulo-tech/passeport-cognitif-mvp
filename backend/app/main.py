from fastapi import FastAPI
from app.routes import users, activities, recommendations, profiles, indicators, health

app = FastAPI()

app.include_router(users.router, prefix="/users")
app.include_router(activities.router, prefix="/activities")
app.include_router(recommendations.router, prefix="/recommendations")
app.include_router(profiles.router, prefix="/profiles")
app.include_router(indicators.router, prefix="/indicators")
app.include_router(health.router, prefix="/health")


@app.get("/")
def root():
    return {"message": "Passeport Cognitif API running"}
