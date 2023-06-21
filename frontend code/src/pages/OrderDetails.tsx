import React, { useState } from "react";
import { Button, Image } from "antd";
import { useNavigate } from "react-router";
import { useApp } from "../proviers";

export default function OrderDetails() {
  const [uuid, setUuid] = useState("");
  const navigate = useNavigate();

  const { findReservation, reservationData } = useApp();
  console.log('reservationData :>> ', reservationData);
  return (
    <div className="bg-primary-background">
      <div className="pt-10">
        <div
          className={`w-fit mx-auto bg-white shadow-sm rounded-md `}>
          <Image
            src="./assets/images/bg-payment-success.svg"
            preview={false}
            draggable={false}
          />

          {/* enter code */}
          <div className={`flex w-full flex-col justify-center items-center ${reservationData.origin && "hidden"}`}>
            <input
              type="text"
              placeholder="کد پیگیری را وارد کنید"
              value={uuid}
              onChange={(e) => setUuid(e.target.value)}
              className="px-3 py-3 relative rounded text-sm text-right border-none "
            />
            <Button
              className="my-4 mx-auto"
              type="primary"
              size="large"
              onClick={() => findReservation(uuid)}>
              جست و جو
            </Button>
          </div>
          {/* show result */}
          <div className={`${!reservationData.origin && "hidden"}`}>
            <div className="p-2 text-center bg-white">
              <div className="text-2xl text-primary-green-3 py-3">
                جزئیات سفارش
              </div>
              <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
                <div>{reservationData.origin}</div>
                <div>مبدا</div>
              </div>
              <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
                <div>{reservationData.destination}</div>
                <div>مقصد</div>
              </div>
              <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
                <div>{undefined}</div>
                <div>نوع ماشین</div>
              </div>{" "}
              <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
                <div>{undefined}</div>
                <div>ملزومات</div>
              </div>{" "}
              <div className="flex items-center justify-between px-20 py-3">
                <div>{reservationData.language}</div>
                <div>مترجم</div>
              </div>
            </div>
            <div className="text-center">
              <Button
                className="my-4 mx-auto"
                type="primary"
                size="large"
                onClick={() => navigate("/")}>
                بازگشت به خانه
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
