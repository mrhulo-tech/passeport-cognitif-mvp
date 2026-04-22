import { APP_NAME } from "../lib/constants";

export default function DashboardHeader() {
  return (
    <header>
      <h1>{APP_NAME}</h1>
      <p>Profil d’apprentissage et progression</p>
    </header>
  );
}
