import React from "react";

export const Categories = () => {
  return (
    <div className="flex w-full bg-cover  justify-evenly  mt-20  font-vazir  ">

      <div className="flex flex-col items-center space-y-4">
        <img src="./assets/images/category-icon-1.svg" alt="" />
        <span className="text-xl ">سفر درون شهری</span>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img src="./assets/images/category-icon-2.svg" alt="" />
        <span className="text-xl ">سفر بین شهری</span>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img src="./assets/images/category-icon-1.svg" alt="" />
        <span className="text-xl ">تورهای شخصی</span>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img src="./assets/images/category-icon-1.svg" alt="" />
        <span className="text-xl ">تور سیاحتی و زیارتی</span>
      </div>
    </div>
  );
};
