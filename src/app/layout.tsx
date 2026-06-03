import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SVAYATT - Autonomous Defence & Tactical Systems",
  description: "Next generation platforms for affordable autonomous combat aerial platforms, land cruise missiles, and decoy tactical intelligence.",
  keywords: "Svayatt, autonomous flight, combat aerial vehicle, defense tech, military drone, DRDO co-development, Paninian Technologies",
  authors: [{ name: "Svayatt & Paninian Technologies" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-base text-on-background selection:bg-gold/30 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
