import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} dark h-full antialiased`}>
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
