import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "BΛSE",
  description:
    "Learn more about BΛSE - a 3D sales and ownership platform for the entire home lifecycle. Visualize, customize, and manage your home with interactive design tools and AI-driven workflows.",
  openGraph: {
    title: "BΛSE - 3D Sales & Ownership Platform",
    description: "Learn more about BΛSE - a 3D sales and ownership platform for the entire home lifecycle. Visualize, customize, and manage your home with interactive design tools.",
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
    title: "BΛSE - 3D Sales & Ownership Platform",
    description: "Learn more about BΛSE - a 3D sales and ownership platform for the entire home lifecycle. Visualize, customize, and manage your home with interactive design tools.",
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
