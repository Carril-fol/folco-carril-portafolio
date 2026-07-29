import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./styles/globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://folcocarril.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Folco Carril — Backend Developer",
  description:
    "Portafolio de Folco Carril, desarrollador back-end de Buenos Aires. Experiencia en Python, Flask, FastAPI, Next.js y APIs REST.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Folco Carril — Backend Developer",
    description:
      "Portafolio de Folco Carril, desarrollador back-end de Buenos Aires.",
    url: siteUrl,
    siteName: "Folco Carril",
    locale: "es_AR",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Folco Carril — Backend Developer",
    description:
      "Portafolio de Folco Carril, desarrollador back-end de Buenos Aires.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
