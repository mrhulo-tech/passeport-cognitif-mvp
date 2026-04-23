Contenu
import "./globals.css";

export const metadata = {
  title: "Passeport Cognitif MVP",
  description:
    "Profil apprenant dynamique fondé sur des données observables, des indicateurs interprétables et des recommandations pédagogiques personnalisées.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
