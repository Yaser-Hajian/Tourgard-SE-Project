import { Button } from "antd";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex flex-col w-full bg-white divide-primary-gray">
      <div className="flex w-full shadow-sm py-2">
        <div className="w-2/5"></div>
        <div className="flex w-1/5 items-center justify-center">
          <img src="/assets/images/logo.svg" className="w-24 h-auto" />
        </div>
        <div className="flex items-center justify-end pr-24 w-2/5">
          <Button className="w-36 h-14  text-white bg-primary-green-1">
            <span>ثبت نام یا ورود</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center text-primary-brown-1 py-8 gap-20">
        <Link to="/home" className="no-underline text-primary-brown-2">
          صفحه اصلی
        </Link>
        <Link to="/contact-us" className="no-underline text-primary-brown-2">
          ارتباط با ما
        </Link>
      </div>
    </div>
  );
};
