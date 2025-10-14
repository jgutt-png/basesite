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
            "flex items-center justify-center h-10 px-6 rounded-full backdrop-blur-lg text-sm font-light tracking-[-0.4px] transition-colors duration-200",
            showBackground ? "bg-white text-[#1B1F3B]" : "bg-[#737B8B] text-white"
          )}
        >
          Contact Us
        </Link>
        <Link
          href="/signup"
          className="flex items-center justify-center h-10 px-6 rounded-full bg-[#F95738] bg-opacity-75 backdrop-blur-lg text-[#F7F9FD] text-sm font-medium tracking-[-0.4px]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
