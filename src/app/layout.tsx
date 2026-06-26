import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://project-aether-16l8.vercel.app"),

  title: {
    default: "Project AETHER | Aryan",
    template: "%s | Project AETHER",
  },

  description:
    "Aryan's futuristic AI-inspired portfolio showcasing Full Stack Development, Artificial Intelligence, Machine Learning, modern web engineering, and premium software projects.",

  keywords: [
    "Aryan",
    "Aryan Portfolio",
    "Project AETHER",
    "AI Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Next.js Portfolio",
    "React Developer",
    "Full Stack Developer",
    "Python",
    "Django",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],

  authors: [
    {
      name: "Aryan",
    },
  ],

  creator: "Aryan",

  publisher: "Aryan",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Project AETHER | Aryan",

    description:
      "Premium AI-inspired portfolio built using Next.js, TypeScript, Tailwind CSS and Framer Motion.",

    url: "https://project-aether-16l8.vercel.app",

    siteName: "Project AETHER",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Project AETHER | Aryan",

    description:
      "AI Engineer • Full Stack Developer • Building modern software experiences.",

    creator: "@aryan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}