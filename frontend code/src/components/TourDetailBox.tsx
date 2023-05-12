import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-multi-date-picker/styles/colors/red.css";
import { useApp } from "../proviers";

export const TourDetailBox = () => {
  // States and Hooks
  const navigate = useNavigate();
  const [setStartDate] = useState(null);
  const {
    origin,
    setOrigin,
    dest,
    setDest,
    pickTime,
    setPickTime,
    returnTime,
    setReturnTime,
    search,
  } = useApp();
  const [loading, setLoading] = useState(false);

  // Methods
  const navigateToDetail = async () => {
    setLoading(true);
    await search();
    navigate("/transfer-detail");
    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-white px-5">
      <img className=" mt-5" src="./assets/icons/steper.svg" alt="" />

      <div className="flex mt-8 h-14 space-x-5">
        <Button className="w-1/2 h-full bg-primary-brown-1 text-white  font-vazir text-xl">
          <span>دوطرفه</span>
        </Button>
        <Button className="w-1/2 h-full bg-primary-brown-4 text-primary-brown-1  font-vazir text-xl">
          <span>یک طرفه</span>
        </Button>
      </div>

      <div className="flex h-14 w-full justify-center my-5 items-center gap-3">
        <div
          dir="rtl"
          className="flex justify-center items-center h-full flex-1 gap-x-1 px-5 border border-solid border-primary-gray"
        >
          <img className="" src="./assets/icons/arrow-bottom.svg" alt="" />
          <input
            dir="rtl"
            className="w-full h-full py-0 border-inherit outline-0 border border-solid border-primary-gray border-x-0"
            type="text"
            placeholder="مقصد:"
            value={dest}
            onChange={(e) => setDest(e.target.value)}
          />
        </div>

        <img src="./assets/icons/double-arrow-icon.svg" alt="" />

        <div
          dir="rtl"
          className="flex justify-center items-center h-full flex-1 gap-x-1 px-5 border border-solid border-primary-gray"
        >
          <img className="" src="./assets/icons/arrow-bottom.svg" alt="" />
          <input
            dir="rtl"
            className="w-max h-full border-inherit outline-0 border border-solid border-primary-gray border-x-0 py-0"
            type="text"
            placeholder="مبدا:"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
      </div>

      <div className="flex h-14 font-vazir gap-2">
        <div
          dir="rtl"
          className="flex justify-between items-center w-full border border-solid border-primary-gray px-2"
          onChange={(e) => setStartDate}
        >
          <div className="flex w-full h-full items-center gap-x-2">
            <img src="./assets/icons/calendar.svg" alt="" />
            <span>تاریخ</span>
            <DatePicker selected={pickTime} onChange={(e) => setPickTime(e)} />
          </div>
        </div>

        <div
          dir="rtl"
          className="flex justify-between items-center w-full font-vazir border border-solid border-primary-gray px-2"
        >
          <div className="flex items-center justify-center gap-x-2">
            <img src="./assets/icons/plus.svg" alt="" />
            <span>برگشت</span>
            <DatePicker
              selected={returnTime}
              onChange={(e) => setReturnTime(e)}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2"></div>
        <Button
          dir="rtl"
          loading={loading}
          onClick={navigateToDetail}
          className="flex justify-center items-center h-14 w-1/2 my-5 font-vazir text-xl"
          type="primary"
        >
          جست و جو...
        </Button>
      </div>
    </div>
  );
};
