"use client";
import React from "react";

export const Background = () => {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
      <div className="absolute inset-0 h-full w-full bg-[#F7F9FD] dark:bg-black pointer-events-none" />
    </div>
  );
};
