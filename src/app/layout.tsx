// @ts-nocheck
import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Using local system font as fallback to avoid Google Fonts download errors
const inter = localFont({
  src: [
    {
      path: '../fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-inter',
});

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
    images: [{ url: '/og-image.jpg' }],
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
