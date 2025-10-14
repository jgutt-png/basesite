import React from 'react';
import {
  BoxIcon,
  DollarSignIcon,
  LandmarkIcon,
  KeyIcon,
  PackageIcon,
  LineChartIcon,
  ShoppingBagIcon,
  HandshakeIcon
} from 'lucide-react';

export const FeatureGrid = () => {
  return (
    <div className="w-full bg-[#F7F9FD] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B1F3B] font-medium text-center mb-4 leading-tight tracking-[-0.4px]">
          Give your Buyers the World's Best Customer Experience
        </h2>
        <p className="text-xl md:text-2xl text-[#737B8B] text-center max-w-4xl mx-auto mb-16">
          Four out of five homeowners regret their purchase. The fifth one used BΛSE. Whether you're an agent or a builder, let your buyers turn any home into their dream home.
        </p>

        <div className="relative max-w-7xl mx-auto">
          {/* Grid of Features */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

          {/* SVG Grid Background - 4 columns x 2 rows with dashed borders */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ zIndex: 0 }}>
            {/* Horizontal lines */}
            <line x1="0" y1="0" x2="400" y2="0" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>
            <line x1="0" y1="100" x2="400" y2="100" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>
            <line x1="0" y1="200" x2="400" y2="200" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>

            {/* Vertical lines */}
            <line x1="0" y1="0" x2="0" y2="200" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>
            <line x1="100" y1="0" x2="100" y2="200" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>
            <line x1="200" y1="0" x2="200" y2="200" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>
            <line x1="300" y1="0" x2="300" y2="200" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>
            <line x1="400" y1="0" x2="400" y2="200" stroke="url(#paint0_radial)" strokeWidth="0.5" strokeDasharray="3 5"/>

            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 100) scale(250 150)">
                <stop offset="0.5" stopColor="#1B1F3B" stopOpacity="0.13"/>
                <stop offset="1" stopColor="#DEE5F9" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
          {/* Feature 1 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px] relative" style={{ zIndex: 1 }}>
            <div className="w-12 h-12 mb-6">
              <BoxIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Design in 3D
            </h3>
            <p className="text-base text-[#737B8B]">
              Walk through your home like a video game. Swap finishes, visualize changes, and see your dream design come to life in real time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <DollarSignIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Get Instant Quotes
            </h3>
            <p className="text-base text-[#737B8B]">
              Builders can price upgrades instantly, while buyers can request quotes for renovations. No more guesswork or back-and-forth emails.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <LandmarkIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Wrap Into Your Mortgage
            </h3>
            <p className="text-base text-[#737B8B]">
              BaseCo partners with trusted lenders to roll upgrade and renovation costs directly into your home loan, simplifying financing.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <KeyIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Move In Smarter
            </h3>
            <p className="text-base text-[#737B8B]">
              Access your BΛSE anytime, even after closing, to track warranties, service dates, and project history in one digital home record.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <PackageIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Explore Upgrades
            </h3>
            <p className="text-base text-[#737B8B]">
              Discover new improvements tailored to your home and budget. Every renovation updates your BΛSE, increasing your long-term equity data.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <LineChartIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Track Your Value
            </h3>
            <p className="text-base text-[#737B8B]">
              Monitor market performance, mortgage balance, and home equity over time. Your BΛSE keeps you informed, automatically.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <ShoppingBagIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Shop the Marketplace
            </h3>
            <p className="text-base text-[#737B8B]">
              Buy furniture, décor, and services from vetted vendors, right inside your BΛSE. Every product fits your floor plan and style.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="p-6 md:p-8 flex flex-col min-h-[280px]">
            <div className="w-12 h-12 mb-6">
              <HandshakeIcon size={48} className="text-[#305CDE]" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1F3B] mb-3 tracking-[-0.4px]">
              Transfer Your Legacy
            </h3>
            <p className="text-base text-[#737B8B]">
              When it's time to sell, your BΛSE becomes a digital history of your home, showcasing upgrades, value, and maintenance for the next owner.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
