import React from "react";
import { Subheading } from "./subheading";
import { UserIcon } from "lucide-react";

export const Features = () => {
  return (
    <div id="platform" className="relative z-20 py-10 lg:py-40 overflow-hidden bg-[#F7F9FD]">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B1F3B] font-semibold text-center mb-6 leading-tight tracking-[-0.4px] max-w-5xl mx-auto">
        The Platform That Grows With Every Home You Sell.
      </h2>
      <Subheading className="text-center max-w-5xl mx-auto">
        BASE gives builders, brokers, and enterprise partners a unified ecosystem that drives sales before the close and engagement long after.
        <br /><br />
        From interactive design tools that sell upgrades instantly to AI-driven workflows that automate operations and service, BASE turns every transaction into an ongoing relationship. Extend your brand, increase your revenue, and transform one-time buyers into lifelong clients.
      </Subheading>

      <div className="w-full max-w-7xl mx-auto mt-12 px-4">
        <div className="relative overflow-visible">
          {/* SVG Grid Background - 2 columns x 2 rows with dashed borders */}
          <svg className="absolute -left-4 -right-4 -top-4 -bottom-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ zIndex: 0 }}>
            {/* Horizontal lines - extended beyond edges */}
            <line x1="0" y1="0" x2="200" y2="0" stroke="#1B1F3B" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="2 4"/>
            <line x1="0" y1="88" x2="200" y2="88" stroke="#1B1F3B" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="2 4"/>
            <line x1="0" y1="200" x2="200" y2="200" stroke="#1B1F3B" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="2 4"/>

            {/* Vertical lines - extended beyond edges */}
            <line x1="0" y1="0" x2="0" y2="200" stroke="#1B1F3B" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="2 4"/>
            <line x1="100" y1="0" x2="100" y2="200" stroke="#1B1F3B" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="2 4"/>
            <line x1="200" y1="0" x2="200" y2="200" stroke="#1B1F3B" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="2 4"/>
          </svg>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0" style={{ zIndex: 1 }}>
          {/* Bento Card 1 */}
          <div className="flex flex-col p-6">
            <img
              src="https://base-ai-portal.s3.us-east-1.amazonaws.com/bento+1.png"
              alt="Bento 1"
              className="w-full h-auto"
            />
          </div>

          {/* Bento Card 2 */}
          <div className="flex flex-col p-6">
            <img
              src="https://base-ai-portal.s3.us-east-1.amazonaws.com/bento+2.png"
              alt="Bento 2"
              className="w-full h-auto"
            />
          </div>

          {/* Bento Card 3 */}
          <div className="flex flex-col p-6">
            <img
              src="https://base-ai-portal.s3.us-east-1.amazonaws.com/Bento+3.png"
              alt="Bento 3"
              className="w-full h-auto"
            />
          </div>

          {/* Bento Card 4 */}
          <div className="flex flex-col p-6">
            <img
              src="https://base-ai-portal.s3.us-east-1.amazonaws.com/bento+4.png"
              alt="Bento 4"
              className="w-full h-auto"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
