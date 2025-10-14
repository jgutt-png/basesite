import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - BΛSE",
  description:
    "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
