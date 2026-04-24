import "./globals.css";

export const metadata = {
  title: "Elimu Sasa",
  description: "CBC Teacher System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text-main font-sans">
        {children}
      </body>
    </html>
  );
}