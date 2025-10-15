"use client";
import { Logo } from "../Logo";
import { Button } from "../button";
import { NavBarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "next-view-transitions";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });
  return (
    <div
      className={cn(
        "w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200",
        showBackground &&
          "backdrop-blur-md border border-white/10 shadow-lg"
      )}
      style={showBackground ? {
        backgroundColor: 'rgba(46, 51, 68, 0.7)',
      } : undefined}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 h-full w-full pointer-events-none rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent, rgba(255,255,255,0.05))',
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row gap-2 items-center">
        <Logo showBackground={showBackground} />
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <NavBarItem href={item.link} key={item.title} target={item.target}>
              {item.title}
            </NavBarItem>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Link
          href="/contact"
          className={cn(
            "relative z-10 border border-transparent text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center",
            showBackground
              ? "bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
              : "bg-white text-black hover:bg-gray-100 shadow-[0px_-1px_0px_0px_#00000040_inset,_0px_1px_0px_0px_#00000040_inset]"
          )}
        >
          Contact Us
        </Link>
        <Link
          href="/contact"
          className="bg-[#F9573A] relative z-10 hover:bg-[#F9573A]/90 border border-transparent text-white text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
