import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "./pricing-table";
import { Companies } from "@/components/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - BΛSE",
  description:
    "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
  openGraph: {
    title: "Pricing - BΛSE",
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
    title: "Pricing - BΛSE",
    description: "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
    images: ["https://basemyhome.s3.us-east-1.amazonaws.com/opengraph_image.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Simple pricing for your ease</Heading>
          <Subheading className="text-center">
            Every AI offers a wide range of services. You can choose the one
            that suits your needs. Select from your favourite plan and get
            started instantly.
          </Subheading>
        </div>
        <Pricing />
        <PricingTable />
        <Companies />
      </Container>
    </div>
  );
}
