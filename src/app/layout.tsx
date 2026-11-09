import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – Company Profile`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
