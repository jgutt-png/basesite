"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    // Set document title
    document.title = "Contact Us - BASE";

    // Load the JotForm embed handler script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      // Initialize the embed handler after script loads
      if (typeof window !== 'undefined' && (window as any).jotformEmbedHandler) {
        (window as any).jotformEmbedHandler("iframe[id='JotFormIFrame-252168000926048']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - JotForm */}
        <div className="relative flex items-start justify-center px-6 py-20 lg:py-32">
          <div className="w-full max-w-xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h1>
            </div>

            <div className="scale-90 origin-top-left">
              <iframe
                id="JotFormIFrame-252168000926048"
                title="Reach out and send us a message!"
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/252168000926048"
                style={{
                  minWidth: '100%',
                  maxWidth: '100%',
                  height: '539px',
                  border: 'none'
                }}
              />
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
