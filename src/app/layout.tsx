import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "deep.food",
  description:
    "An innovative, cloud-based platform for the food industry that leverages real-time data analytics and POS integration to optimize inventory management, reduce waste, and boost sustainability.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "deep.food",
    description:
      "deep.food is a revolutionary sustainability solution for restaurants, supermarkets, and food manufacturers. It harnesses real-time data and machine learning to streamline operations and cut down food waste.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "deep.food",
    description:
    "Discover deep.food – a cutting-edge platform that uses real-time analytics and AI to optimize food inventory and drive sustainability in the food industry."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
