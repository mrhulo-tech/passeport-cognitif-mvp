const API_BASE_URL = "http://localhost:8000";

export async function fetchDashboard(userId: number) {
  const response = await fetch(`${API_BASE_URL}/dashboard/${userId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer le dashboard");
  }

  return response.json();
}
