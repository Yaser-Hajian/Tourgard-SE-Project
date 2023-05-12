import { Checkbox, Button } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";

export const PaymentBox = () => {
  // States and Hooks
  const navigate = useNavigate();

  // Methods
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="flex flex-col w-full  bg-white p-5 font-vazir">
      <h1 className="text-end text-xl text-primary-brown-2">پرداخت</h1>
      <div className="border border-primary-gray mb-2 mt-2 border-solid "></div>

      <div
        dir="rtl"
        className="flex w-full h-14 items-center my-4 mb-3 px-0 mx-auto border border-primary-gray border-solid"
      >
        <img
          className=" items-center justify-center z-10 pr-3"
          src="./assets/icons/clock.svg"
          alt=""
        />
        <input
          type="text"
          placeholder="شماره کارت"
          className="px-3 py-3 text-primary-placeholder rounded text-sm  w-full border-none"
        />
      </div>
      <div
        dir="rtl"
        className="flex w-full h-14 items-center my-4 mb-3 px-0 mx-auto border border-primary-gray border-solid"
      >
        <img
          className=" items-center justify-center z-10 pr-3"
          src="./assets/icons/user.svg"
          alt=""
        />
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="px-3 py-3 border-none text-primary-placeholder focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
        />
      </div>

      <div className="flex gap-5">
        <div
          dir="rtl"
          className="flex w-1/2 h-14 items-center my-4 mb-3 px-2 border border-primary-gray border-solid"
        >
          <img
            className=" items-center justify-center z-10"
            src="./assets/icons/calendar.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="ماه / سال"
            className="px-3 py-3 border-none text-primary-placeholder focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
          />
        </div>
        <div className="flex w-1/2 h-14 items-center my-4 mb-3 px-2 border border-primary-gray border-solid">
          <img
            className=" items-center justify-center z-10"
            src="./assets/icons/clock.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="CVV2"
            className="px-3 py-3 border-none text-primary-placeholder focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Checkbox
          className="font-vazir text-primary-placeholder "
          onChange={onChange}
        >
          با شرایط استفاده از خدمات موافقم
        </Checkbox>
        <img src="./assets/icons/message-question.svg" alt="" />
      </div>

      <p dir="rtl" className="mt-4 text-sm text-primary-placeholder  ">
        با کلیک روی دکمه هم اکنون رزرو کنید، با شرایط و ضوابط و ضمانت بازگشت وجه
        موافقت می کنید. ممنون از اعتماد شما به خدمات ما
      </p>

      <Button
        dir="rtl"
        type="primary"
        className="flex justify-between items-center h-14  my-5 text-white text-xl"
        onClick={() => navigate("/payment")}
      >
        <div className="flex justify-between items-center ">
          <div className="flex">
            <img src="./assets/icons/arrow-left.svg" alt="" />
            <span>پرداخت</span>
          </div>
          <span>1.000.000تومان</span>
        </div>
      </Button>
    </div>
  );
};
