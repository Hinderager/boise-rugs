import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boise Rugs | Premium Rugs for Every Room | Free Shipping",
  description: "Shop beautiful rugs for your home in Boise, Idaho. Persian, washable, outdoor, and more. Free shipping on all orders. 30-day returns.",
  keywords: "rugs, Boise rugs, area rugs, Persian rugs, washable rugs, outdoor rugs, living room rugs, bedroom rugs",
  openGraph: {
    title: "Boise Rugs | Premium Rugs for Every Room",
    description: "Shop beautiful rugs for your home. Free shipping on all orders.",
    url: "https://boise-rugs.com",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
