import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Enrique Yugcha - CV | Desarrollador de Software Senior",
  description: "Portafolio y currículum vitae interactivo de Enrique Yugcha, Desarrollador de Software Senior especializado en aplicaciones web y automatización.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
