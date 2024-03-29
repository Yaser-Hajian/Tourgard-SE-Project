import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../proviers";
import { showToast } from "../utils/toastifyPromise";

const Payment = () => {
  // States and Hooks
  const navigate = useNavigate();

  const {
    createReservation,
    reservationData
  } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  console.log('reservation :>> ', reservationData);
  // Render
  return (
    <div className="bg-primary-background">
      <div className="pt-10">
        <div className="w-fit mx-auto bg-white shadow-sm rounded-md">
          <Image
            src="./assets/images/bg-payment-success.svg"
            preview={false}
            draggable={false}
          />
          <div className={`${ reservationData.origin&&"hidden"} flex justify-evenly pb-7`}>
            <Button
              className="my-4 mx-auto"
              type="primary"
              size="large"
              onClick={() => createReservation()}>
              موفق
            </Button>
            <Button
              className="my-4 mx-auto bg-red-400"
              type="primary"
              size="large"
              onClick={() => {navigate("/");showToast("پرداخت ناموفق بود لطفا دوباره تلاش کنید","error")}}>
              ناموفق
            </Button>
          </div>
          <div className={`${!reservationData?.customer?.phone_number&&"hidden"}`}>
            <div className="p-2 text-center bg-white">
              <div className="text-2xl text-primary-green-3 py-3">
                پرداخت انجام شد
              </div>
              <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
                <div>{reservationData.origin}</div>
                <div>مبدا</div>
              </div>
              <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
                <div>{reservationData.destination}</div>
                <div>مقصد</div>
              </div>
              <div className="flex items-center justify-between px-20 py-3">
                <div>{reservationData.tracking_code}</div>
                <div>شناسه پیگیری</div>
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
};

export default Payment;
