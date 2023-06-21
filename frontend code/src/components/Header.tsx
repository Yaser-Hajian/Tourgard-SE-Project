import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useApp } from "../proviers";
import { showToast } from "../utils/toastifyPromise";

export const Header = () => {
  const [showExitItem, setShowExitItem] = useState(false)
  const { getUserCoreData,userData } = useApp();

  useEffect(() => { 
      getUserCoreData(); 
  }, []);

const exitUser=()=>{
  localStorage.removeItem("phone")
  getUserCoreData();
  showToast("شما از سیستم خارج شدید","info")
}

  return (
    <div className="flex flex-col w-full bg-white divide-primary-gray">
      <div className="flex w-full shadow-sm py-2">
        <div className="w-2/5"></div>
        <div className="flex w-1/5 items-center justify-center">
          <Link to={"/"}>
            <img src="/assets/images/logo.svg" className="w-24 h-auto" />
          </Link>
        </div>
        <div className="flex items-center justify-end pr-24 w-2/5">
          <Link to={"/order-details"}>
            <Button className="w-36 h-14  text-white bg-primary-green-1 mr-3">
              <span>جزئیات سفارش</span>
            </Button>
          </Link>
          {userData.phone_number?(
            <div className=" w-28 flex justify-center items-center flex-col pt-6" onMouseEnter={()=> setShowExitItem(true)} onMouseLeave={()=> setShowExitItem(false)} >
              <b className=" cursor-default">{userData.phone_number}</b>
              <i className={`text-red-400 text-sm cursor-pointer ${showExitItem?"opacity-100":"opacity-0"} transition-all`} onClick={()=>exitUser()}>خروج از سیستم</i>
            </div>
          ):(
          <Link to={"/login"}>
            <Button className="w-36 h-14  text-white bg-primary-green-1">
              <span>ثبت نام یا ورود</span>
            </Button>
          </Link>
          )}
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
