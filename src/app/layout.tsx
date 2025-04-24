// @ts-nocheck
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshaj Shukla | ML Engineer & Developer",
  description: "Portfolio of Anshaj Shukla - Specializing in Machine Learning, Data Science, and Software Development",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://anshajshukla.com',
    title: 'Anshaj Shukla | ML Engineer & Developer',
    description: 'Portfolio of Anshaj Shukla - Specializing in Machine Learning, Data Science, and Software Development',
    siteName: 'Anshaj Shukla Portfolio',
    images: [{ url: '/og-imcage.jpg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-[#121212] antialiased overflow-x-hidden`}>
        {/* Temporarily commented out background components that might cause rendering issues */}
        {/* <FrameworkLogosBackground /> */}
        {/* <ParticlesBackground /> */}
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
