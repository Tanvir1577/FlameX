import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLAME-X — Next Generation AI Fire Rescue Intelligence System",
  description:
    "FLAME-X is an advanced AI-based smart fire rescue and emergency response system designed to operate across land, water, and air environments. Military-grade rescue intelligence with smart fire suppression, AI detection, and autonomous navigation.",
  keywords: [
    "FLAME-X",
    "AI Fire Rescue",
    "Smart Firefighting",
    "Emergency Response",
    "Multi-Terrain Rescue",
    "AI Detection",
    "Fire Suppression",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
