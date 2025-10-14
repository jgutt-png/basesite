"use client";

import Balancer from "react-wrap-balancer";
import { Badge } from "./badge";
import { motion } from "framer-motion";

import Image from "next/image";
import { Link } from "next-view-transitions";

export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
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
        className="flex justify-center"
      >
        <Badge onClick={() => router.push("/blog/top-5-llm-of-all-time")}>
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
        className="text-2xl md:text-3xl lg:text-6xl font-semibold max-w-5xl mx-auto text-center mt-6 relative z-10"
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
        className="text-center mt-6 text-sm md:text-lg text-muted dark:text-muted-dark max-w-2xl mx-auto relative z-10"
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
        className="flex justify-center mt-6 relative z-10 px-4"
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
          <button className="flex-1 h-10 bg-[#F9E2DE] border border-[#F9573A] rounded-lg px-4 py-2 flex items-center justify-center">
            <span className="text-[#F9573A] text-sm text-center tracking-[-0.4px] font-bold">
              Get on the Waitlist
            </span>
          </button>
        </div>
      </motion.div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative mb-20">
        <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent to-[#F7F9FD] dark:to-black pointer-events-none" />
        <div className="p-2 bg-[#F7F9FD] dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <Image
            src="https://basemyhome.s3.us-east-1.amazonaws.com/ba57176a-bee3-4967-a5f5-cda30e5c1d0b.png"
            alt="header"
            width={1920}
            height={1080}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};
