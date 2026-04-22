import "./globals.css";

export const metadata = {
  title: "Passeport Cognitif MVP",
  description: "Visualisation MVP du Passeport Cognitif"
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
