"use client";
import React from "react";
import Image from "next/image";

export const HeroGrid = () => {
  return (
    <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none z-10">
      <Image
        src="https://basemyhome.s3.us-east-1.amazonaws.com/3d9e4b07-186e-433e-a201-f136c3a2c0dd.png"
        alt="Grid background"
        fill
        className="object-cover object-top"
        priority
      />
    </div>
  );
};
