import React from "react";
import { TransferCard } from "./TransferCard";

export const TransferCost = () => {
  return (
    <div className="flex flex-col mt-20 h-full">
      <div className="flex items-center justify-center ">
        <h1 className="text-5xl text-center font-vazir  ">
          قیمت ترانسفر فرودگاه امام خمینی با وسایل
          <br /> نقلیه شخصی راحت، ایمن و لوکس
        </h1>
      </div>

    {/* suggestion cards */}
      <div className="flex justify-evenly w-full h-full">
        <TransferCard />
        <TransferCard />
        <TransferCard />
      </div>
    </div>
  );
};
