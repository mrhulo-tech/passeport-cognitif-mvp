from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import (
    users,
    activities,
    recommendations,
    profiles,
    indicators,
    health,
    learner_profiles,
    learning_paths,
    task_results,
    dashboard,
    progression,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/users")
app.include_router(activities.router, prefix="/activities")
app.include_router(recommendations.router, prefix="/recommendations")
app.include_router(profiles.router, prefix="/profiles")
app.include_router(indicators.router, prefix="/indicators")
app.include_router(health.router, prefix="/health")
app.include_router(learner_profiles.router, prefix="/learner-profiles")
app.include_router(learning_paths.router, prefix="/learning-paths")
app.include_router(task_results.router, prefix="/task-results")
app.include_router(dashboard.router, prefix="/dashboard")
app.include_router(progression.router, prefix="/progression")


@app.get("/")
def root():
    return {"message": "Passeport Cognitif API running"}
