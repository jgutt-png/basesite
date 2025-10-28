"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
  useEffect(() => {
    // Set document title
    document.title = "Get Started - BASE";

    // Load the JotForm script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/253004073145142';

    // Append to the specific container instead of body
    const container = document.getElementById('jotform-container');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9FD] dark:bg-black relative overflow-hidden">
      {/* Hero Grid Background */}
      <div className="fixed left-0 right-0 top-0 h-[600px] pointer-events-none z-10 w-screen">
        <Image
          src="https://basemyhome.s3.us-east-1.amazonaws.com/3d9e4b07-186e-433e-a201-f136c3a2c0dd.png"
          alt="Grid background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 relative z-20">
        {/* Left side - JotForm */}
        <div className="relative flex items-start justify-center px-6 py-20 lg:py-32">
          <div className="w-full max-w-xl">
            <div className="mb-8 hidden md:block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Get Started
              </h1>
            </div>

            <div id="jotform-container" className="[&_iframe]:rounded-2xl [&_form]:rounded-2xl">
              {/* JotForm will be injected here */}
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative hidden lg:flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src="https://basemyhome.s3.us-east-1.amazonaws.com/9ca44543-14f3-4dc0-81b6-f59c55862859.png"
              alt="BASE Platform Visualization"
              className="w-full h-full object-contain scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
