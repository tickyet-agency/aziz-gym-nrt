import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Body Grow Gym Aziz | Train Hard. Build Strength. Transform.",
  description:
    "Body Grow Gym Aziz is a premium strength & conditioning facility built for serious results. Spacious training floor, professional coaching, and personal training programs starting at ₹2000/month.",
  keywords: [
    "Body Grow Gym Aziz",
    "gym near me",
    "personal training",
    "strength training gym",
    "premium gym membership",
  ],
  openGraph: {
    title: "Body Grow Gym Aziz",
    description: "Train Hard. Build Strength. Transform Your Life.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-body">
        <SmoothScrollProvider>
          {children}
          <WhatsAppFloatingButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
