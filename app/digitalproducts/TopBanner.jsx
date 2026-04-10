import React from "react";

function TopBanner() {
  return (
    <div className="w-full bg-[#FFA500]  p-2 ">
      <div className="flex flex-col items-center gap-2 pb-3 lg:flex-row lg:gap-4 lg:justify-between lg:px-20">
        <div>
          <h1 className="text-lg font-bold text-center md:text-start lg:text-nowrap">
             Launch Discount Active: Up to 40% OFF. Ends Sunday Midnight.
          </h1>
        </div>
        <div>
          <p className="text-sm md:text-md lg:text-lg bg-[#EDF296] rounded-xl px-3 py-1 font-medium md:text-nowrap">
            Shop Now @ Discounted Prices
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
