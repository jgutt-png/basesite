"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "../button";
import { Logo } from "../Logo";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

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
        "flex justify-between items-center w-full rounded-full px-2.5 py-1.5 transition duration-200",
        !showBackground && "bg-white dark:bg-neutral-900",
        showBackground &&
          "backdrop-blur-md border border-white/10 shadow-lg"
      )}
      style={showBackground ? {
        backgroundColor: 'rgba(46, 51, 68, 0.7)',
      } : undefined}
    >
      <Logo showBackground={showBackground} />
      <IoIosMenu
        className="text-black dark:text-white h-6 w-6"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-5">
            <Logo showBackground={true} />
            <IoIosClose
              className="h-8 w-8 text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            {navItems.map((navItem: any, idx: number) => (
              <>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, idx: number) => (
                      <Link
                        key={`link=${idx}`}
                        href={childNavItem.link}
                        onClick={() => setOpen(false)}
                        className="relative max-w-[15rem] text-left text-2xl"
                      >
                        <span className="block text-black">
                          {childNavItem.title}
                        </span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-black dark:text-white">
                      {navItem.title}
                    </span>
                  </Link>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-col w-full items-start gap-3 px-8 py-4">
            <Link
              href="/contact"
              className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] w-full"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/signup"
              className="bg-[#F9573A] relative z-10 hover:bg-[#F9573A]/90 border border-transparent text-white text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] w-full"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
