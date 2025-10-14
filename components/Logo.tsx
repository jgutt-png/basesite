"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Logo = ({ showBackground = false }: { showBackground?: boolean }) => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      <Image
        src={showBackground
          ? "https://base-ai-portal.s3.us-east-1.amazonaws.com/BASE+logo.png"
          : "https://base-ai-portal.s3.us-east-1.amazonaws.com/sidebar.png"
        }
        alt="BASE Logo"
        width={120}
        height={48}
        className="object-contain"
      />
    </Link>
  );
};
