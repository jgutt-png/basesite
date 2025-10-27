import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "BΛSE",
  description:
    "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
  openGraph: {
    title: "BΛSE",
    description: "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
    images: [{
      url: "https://basemyhome.s3.us-east-1.amazonaws.com/opengraph_image.png",
      width: 1200,
      height: 630,
      alt: "BΛSE - 3D Sales & Ownership Platform",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BΛSE",
    description: "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
    images: ["https://basemyhome.s3.us-east-1.amazonaws.com/opengraph_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
