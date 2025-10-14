import { Background } from "@/components/background";
import { Metadata } from "next";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - BΛSE",
  description:
    "BΛSE is a unified platform for builders, brokers, and enterprise partners that drives sales and engagement. From interactive design tools to AI-driven workflows, BΛSE transforms every transaction into an ongoing relationship.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto">
            <FeaturedTestimonials />
            <p
              className={cn(
                "font-semibold text-xl text-center dark:text-muted-dark text-muted"
              )}
            >
              BΛSE is used by thousands of users
            </p>
            <p
              className={cn(
                "font-normal text-base text-center text-neutral-500 dark:text-neutral-200 mt-8"
              )}
            >
              With lots of AI applications around, BΛSE stands out with
              its unified platform for builders, brokers, and enterprise partners.
            </p>
          </div>
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
}
