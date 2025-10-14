import React from "react";
import { Subheading } from "./subheading";
import { UserIcon } from "lucide-react";

export const Features = () => {
  return (
    <div className="relative z-20 py-10 lg:py-40 overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B1F3B] font-semibold text-center mb-6 leading-tight tracking-[-0.4px] max-w-5xl mx-auto">
        The Platform That Grows With Every Home You Sell.
      </h2>
      <Subheading className="text-center max-w-5xl mx-auto">
        BASE gives builders, brokers, and enterprise partners a unified ecosystem that drives sales before the close and engagement long after.
        <br /><br />
        From interactive design tools that sell upgrades instantly to AI-driven workflows that automate operations and service, BASE turns every transaction into an ongoing relationship. Extend your brand, increase your revenue, and transform one-time buyers into lifelong clients.
      </Subheading>

      <div className="w-full max-w-7xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* For Builders Section */}
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-medium text-[#305fde] tracking-[-0.4px] mb-3">For Builders:</h3>
            <p className="text-base text-[#737c8b] mb-6">
              Make every home custom, increase your sale price by 30%, and sell your units sold in advance- long before you've even broken ground.
            </p>
            <div className="relative w-full h-[280px] rounded-2xl bg-gray-200">
              {/* Builder Dashboard Image placeholder */}
            </div>
          </div>

          {/* For Brokers & Agents Section */}
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-medium text-[#305fde] tracking-[-0.4px] mb-3">For Brokers & Agents:</h3>
            <p className="text-base text-[#737c8b] mb-6">
              Stand out in a crowded market, crush cosmetic objections, and increase commissions by selling homes for more.
            </p>
            <div className="relative w-full h-[280px] rounded-2xl bg-gray-200">
              {/* Broker Dashboard Image placeholder */}
            </div>
          </div>

          {/* For Home Buyers, Owners, and Sellers Section */}
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-medium text-[#305fde] tracking-[-0.4px] mb-3">
              For Home Buyers, Owners, and Sellers:
            </h3>
            <p className="text-base text-[#737c8b] mb-6">
              BΛSE isn't just for the sale, it's for the entire lifecycle of the home. From before move-in, through your mortgage, and even when it's time to sell, you can manage everything from buying furniture, hiring painters, or even tracking your HVAC warranty. BΛSE does it all.
            </p>
            <div className="relative w-full h-[400px] rounded-2xl bg-gray-200">
              {/* Home Owner Dashboard placeholder */}
            </div>
          </div>

          {/* For Enterprise Section */}
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-medium text-[#305fde] tracking-[-0.4px] mb-3">For Enterprise:</h3>
            <p className="text-base text-[#737c8b] mb-6">
              BaseAI is your personal, private, in-house AI assistant that can do everything from checking building codes or zoning laws to pulling information from your internal client documents- all custom-configured for your organization.
            </p>
            <div className="relative w-full h-[400px] rounded-2xl bg-gray-200">
              {/* Enterprise AI Chat placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
