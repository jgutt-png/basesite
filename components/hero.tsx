"use client";

import Balancer from "react-wrap-balancer";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import { HeroGrid } from "./hero-grid";
import { Link } from "next-view-transitions";

export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-40 relative">
      <HeroGrid />
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center relative z-20"
      >
        <Badge>
          🏡 | Make Every Home Custom
        </Badge>
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-3xl lg:text-6xl font-semibold max-w-5xl mx-auto text-center mt-6 relative z-20"
      >
        <Balancer>A 3D Sales & Ownership Platform for the Entire Home Lifecycle</Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-sm md:text-lg text-muted dark:text-muted-dark max-w-2xl mx-auto relative z-20"
      >
        <Balancer>
          BΛSE gives builders and brokers a unified system to visualize, price, and deliver fully customized homes- and then stay connected through ownership. From real-time 3D upgrades to post-close engagement, BΛSE helps you increase margins, shorten sales cycles, and build lasting client relationships.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex justify-center mt-6 relative z-20 px-4"
      >
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Link
            href="/contact"
            className="flex-1 h-10 bg-white border border-[#737B8B] rounded-lg px-4 py-2 flex items-center justify-center"
          >
            <span className="text-[#737B8B] text-sm text-center tracking-[-0.4px] font-normal">
              Contact Us
            </span>
          </Link>
          <Link
            href="/get-started"
            className="flex-1 h-10 bg-[#F9E2DE] hover:bg-[#F9E2DE]/90 border border-[#F9573A] rounded-lg px-4 py-2 flex items-center justify-center transition-colors"
          >
            <span className="text-[#F9573A] text-sm text-center tracking-[-0.4px] font-bold">
              Get on the Waitlist
            </span>
          </Link>
        </div>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative z-20 mb-20">
          <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent to-[#F7F9FD] dark:to-black pointer-events-none" />
          <div className="p-2 bg-[#F7F9FD] dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-[20px]"
                src="https://www.youtube.com/embed/cEPNBh_qVtQ"
                title="BASE Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
