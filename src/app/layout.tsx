import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate | MantaBay",
  description: "Navigating dreams, crafting homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
          color="#256252"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
