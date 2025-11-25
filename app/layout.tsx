import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lance Ian T. Leanillo · Portfolio",
  description:
    "Portfolio website of Lance Ian T. Leanillo, Computer Science student at Central Philippine University specializing in software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}