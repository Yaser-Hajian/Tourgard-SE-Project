import { Button, Image } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  // States and Hooks
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <div className="p-2 text-center bg-white">
            <div className="text-2xl text-primary-green-3 py-3">
              پرداخت انجام شد
            </div>
            <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
              <div>تهران</div>
              <div>مبدا</div>
            </div>
            <div className="flex items-center justify-between px-20 py-3 border-0 border-b border-solid border-gray-300">
              <div>اصفهان</div>
              <div>مقصد</div>
            </div>
            <div className="flex items-center justify-between px-20 py-3">
              <div>TG9823KL</div>
              <div>شناسه پیگیری</div>
            </div>
          </div>
          <div className="text-center">
            <Button
              className="my-4 mx-auto"
              type="primary"
              size="large"
              onClick={() => navigate("/")}
            >
              بازگشت به خانه
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
