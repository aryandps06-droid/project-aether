import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://project-aether-16l8.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Project AETHER | Aryan",
    template: "%s | Project AETHER",
  },

  description:
    "Aryan's premium AI-inspired portfolio showcasing Artificial Intelligence, Machine Learning, Full Stack Development, Next.js, React, TypeScript, Python, and modern software engineering.",

  applicationName: "Project AETHER",

  keywords: [
    "Aryan",
    "Project AETHER",
    "Portfolio",
    "AI Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Django",
    "Full Stack Developer",
    "Software Engineer",
    "Computer Science",
  ],

  authors: [{ name: "Aryan" }],

  creator: "Aryan",

  publisher: "Aryan",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Project AETHER | Aryan",

    description:
      "Premium AI-inspired portfolio built using Next.js, TypeScript, Tailwind CSS, Three.js and Framer Motion.",

    url: SITE_URL,

    siteName: "Project AETHER",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Project AETHER",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Project AETHER | Aryan",

    description:
      "AI Engineer • Full Stack Developer • Machine Learning",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/favicon.ico",
  },

  appleWebApp: {
    capable: true,
    title: "Project AETHER",
    statusBarStyle: "black-translucent",
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
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