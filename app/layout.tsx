import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AEDA Investment -Empowering Economic Development Across Africa",
  description: "AEDA Investment is a leading investment firm that provides capital financing for African companies in high growth sectors with value-added goods and services and creates durable partnerships between foreign companies and partners with African projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Red Hat Display', system-ui, sans-serif" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
