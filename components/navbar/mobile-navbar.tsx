"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState, Fragment } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
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
    <>
      <div
        className={cn(
          "flex justify-between items-center w-full rounded-full px-2.5 py-1.5 transition duration-200",
          showBackground &&
            "backdrop-blur-md border border-white/10 shadow-lg"
        )}
        style={showBackground ? {
          backgroundColor: 'rgba(46, 51, 68, 0.7)',
        } : undefined}
      >
        <Logo showBackground={showBackground} />
        <IoIosMenu
          className={cn(
            "h-6 w-6 mr-2",
            showBackground ? "text-white" : "text-black dark:text-white"
          )}
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-start justify-start space-y-10 pt-5 text-xl text-zinc-600 transition duration-200 hover:text-zinc-800" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex items-center justify-between w-full px-5">
            <Logo showBackground={false} />
            <IoIosClose
              className="h-8 w-8 text-black"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            {navItems.map((navItem: any, idx: number) => (
              <Fragment key={`nav-item-${idx}`}>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, childIdx: number) => (
                      <Link
                        key={`child-link-${idx}-${childIdx}`}
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
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-black">
                      {navItem.title}
                    </span>
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
          <div className="flex flex-col w-full items-start gap-3 px-8 py-4">
            <Link
              href="/contact"
              className="bg-white relative z-10 hover:bg-gray-100 border border-transparent text-black text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#00000040_inset,_0px_1px_0px_0px_#00000040_inset] w-full"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/get-started"
              className="bg-[#F9573A] relative z-10 hover:bg-[#F9573A]/90 border border-transparent text-white text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] w-full"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
