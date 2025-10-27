"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: "_blank";
  showBackground?: boolean;
};

export function NavBarItem({
  children,
  href,
  active,
  target,
  className,
  showBackground,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center text-base font-semibold leading-[110%] px-4 py-2 rounded-full transition-all duration-200",
        showBackground
          ? "text-white hover:bg-white/20 hover:shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
          : "text-muted hover:bg-white/20 hover:text-black",
        (active || pathname?.includes(href)) &&
          (showBackground ? "bg-white/20" : "bg-white/20 text-black"),
        className
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
