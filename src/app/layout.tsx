
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster"

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { useEmail } from "@/hooks/use-email";
import ChatSupport from "@/components/chat-support/chat-support";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "datatrace",
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
    title: "datatrace",
    description:
      "datatrace is a revolutionary sustainability solution for restaurants, supermarkets, and food manufacturers. It harnesses real-time data and machine learning to streamline operations and cut down food waste.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "datatrace",
    description:
      "Discover datatrace – a cutting-edge platform that uses real-time analytics and AI to optimize food inventory and drive sustainability in the food industry."
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
          <Toaster />
          <ChatSupport/>
        </ThemeProvider>
      </body>
    </html>
  );
}
