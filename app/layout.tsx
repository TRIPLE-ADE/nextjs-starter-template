import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description:
    "A pre-configured Next.js starter template with essential tools like Tailwind CSS, ESLint, Prettier, Husky, and more for efficient project setup.",
  keywords: [
    "Next.js",
    "starter template",
    "Next.js boilerplate",
    "Tailwind CSS",
    "ESLint",
    "Prettier",
    "Husky",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Abdulrasheed Abdulsalam", url: "https://github.com/TRIPLE-ADE" }],
  openGraph: {
    title: "Next.js Starter Template",
    description:
      "Get started with this powerful Next.js starter template, including Tailwind CSS, ESLint, Prettier, and more.",
    url: "https://github.com/TRIPLE-ADE/nextjs-starter-template",
    siteName: "Next.js Starter",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Next.js+Starter",
        width: 1200,
        height: 630,
        alt: "Next.js Starter Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Triple123A",
    creator: "@Triple123A",
    title: "Next.js Starter Template",
    description: "Start building with this feature-rich Next.js template.",
    images: ["https://via.placeholder.com/1200x630.png?text=Next.js+Starter"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
