import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Madni Saiyed - Full-Stack Developer | DSA Expert | Competition Winner",
  description: "Full-stack developer with expertise in React.js, JavaScript, RESTful APIs, and Data Structures & Algorithms. Competition winner for best school website design (100+ entries). Strong foundation in SQL and MongoDB with proven problem-solving abilities.",
  keywords: ["Full Stack Developer", "DSA", "React.js", "JavaScript", "Node.js", "MongoDB", "Data Structures", "Algorithms", "Competition Winner", "Frontend Developer"],
  authors: [{ name: "Madni Saiyed" }],
  openGraph: {
    title: "Madni Saiyed - Full-Stack Developer & DSA Expert",
    description: "Competition-winning Full-Stack Developer specializing in React.js, DSA, and high-performance web applications",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
