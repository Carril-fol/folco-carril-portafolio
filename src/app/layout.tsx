import type { Metadata } from "next";

import "./styles/globals.css";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Folco Carril Portafolio Developer",
  description: "An portafolio website for Folco Carril, a software developer.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
