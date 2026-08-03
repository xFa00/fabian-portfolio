import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabianchiran.dev"),

  title: {
    default: "Fabián Chiran | Cybersecurity Portfolio",
    template: "%s | Fabián Chiran",
  },

  description:
    "Portafolio de Fabián Chiran, Ingeniero de Sistemas enfocado en ciberseguridad, cloud, automatización y análisis de datos.",

  keywords: [
    "Fabián Chiran",
    "Cybersecurity",
    "Ciberseguridad",
    "Cloud",
    "AWS",
    "Automation",
    "Ansible",
    "Python",
    "Medellín",
    "Colombia",
  ],

  authors: [
    {
      name: "Fabián Chiran",
    },
  ],

  creator: "Fabián Chiran",

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://fabianchiran.dev",
    siteName: "Fabián Chiran",
    title: "Fabián Chiran | Cybersecurity Portfolio",
    description:
      "Ingeniero de Sistemas enfocado en ciberseguridad, cloud, automatización y análisis de datos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fabián Chiran | Cybersecurity Portfolio",
    description:
      "Ingeniero de Sistemas enfocado en ciberseguridad, cloud, automatización y análisis de datos.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}