import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FrameworkLogosBackground from '@/components/FrameworkLogosBackground';
import ParticlesBackground from '@/components/ParticlesBackground';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshaj Shukla | ML Engineer & Developer",
  description: "Portfolio of Anshaj Shukla - Specializing in Machine Learning, Data Science, and Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] antialiased overflow-x-hidden`}>
        {/* 3D and particle backgrounds */}
        <FrameworkLogosBackground />
        <ParticlesBackground />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
