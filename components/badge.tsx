import React from "react";
import { cn } from "@/lib/utils";

export const Badge: React.FC<
  { children: React.ReactNode } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-gradient-to-r from-blue-600 to-orange-500 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-[1px] text-[10px] sm:text-xs font-semibold leading-6 inline-block w-fit mx-auto"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4">
        <span className="flex items-center gap-2">
          {typeof children === 'string' && children.includes('|') ? (
            <>
              <span className="text-neutral-900 dark:text-neutral-100">
                {children.split('|')[0].trim()}
              </span>
              <span className="text-neutral-400">|</span>
              <span
                style={
                  {
                    "--bg-size": "300%",
                    "--color-from": "#2563eb",
                    "--color-to": "#f97316",
                  } as React.CSSProperties
                }
                className={cn(
                  "animate-gradient inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                )}
              >
                {children.split('|')[1].trim()}
              </span>
            </>
          ) : (
            <span
              style={
                {
                  "--bg-size": "300%",
                  "--color-from": "#2563eb",
                  "--color-to": "#f97316",
                } as React.CSSProperties
              }
              className={cn(
                "animate-gradient inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
              )}
            >
              {children}
            </span>
          )}
        </span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};
