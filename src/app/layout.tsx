import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <main className="flex min-h-screen flex-col bg-[#121212]">
          {children}
        </main>
      </body>
    </html>
  );
}
