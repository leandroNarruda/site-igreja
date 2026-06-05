import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IASD Santa Tereza",
  description: "Campanha de arrecadação para construção da igreja.",
  metadataBase: new URL("https://iasdsantatereza.com.br"),
  icons: {
    icon: "/ico.jpg",
    shortcut: "/ico.jpg",
    apple: "/ico.jpg",
  },
  openGraph: {
    title: "IASD Santa Tereza",
    description: "Campanha de arrecadação para construção da igreja.",
    url: "https://iasdsantatereza.com.br",
    siteName: "IASD Santa Tereza",
    images: [
      {
        url: "/campanha_construcao.jpg",
        width: 1200,
        height: 630,
        alt: "Campanha de construção da igreja",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IASD Santa Tereza",
    description: "Campanha de arrecadação para construção da igreja.",
    images: ["/campanha_construcao.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
