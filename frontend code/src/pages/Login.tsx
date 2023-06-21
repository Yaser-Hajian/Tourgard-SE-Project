import { Button, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../proviers";
import { showToast } from "../utils/toastifyPromise";

export default function Login() {
  const [step, setStep] = useState(1);

  const navigate=useNavigate()

  const {

    userData,

    phoneNumber,
    setPhoneNumber,
    loginUser,
    
  } = useApp();

  useEffect(() => {
    if (userData?.phone_number) {
      navigate("/",{replace:true})
    }

  }, [userData])
  

  const handleLogin=()=>{
    const authInputs=document.querySelectorAll(".authInput")
    var inputsValue=""
    authInputs.forEach(item=>{
      //@ts-ignore
      inputsValue+= item.value
    })
    debugger
    if (inputsValue=="1111") {
      loginUser()
    }else{
      showToast("لطفا کد تایید را برسی کنید","info")
    }
  }

  return (
    <div className="bg-primary-background">
      <div className="pt-10">
        <div className="w-fit mx-auto bg-white shadow-sm rounded-md pb-32">
          <Image
            src="./assets/images/bg-payment-success.svg"
            preview={false}
            draggable={false}
          />
          <div className=" flex justify-center items-center mt-32 bg-white">
            {step == 1 ? (
              <div
                dir="rtl"
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid ">
                <img
                  className=" items-center justify-center z-10"
                  src="./assets/icons/mobile.png"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="شماره تماس"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="px-3 py-3 relative rounded text-sm w-full border-none"
                />
              </div>
            ) : (
              <div className="flex justify-end items-center flex-col">
                <div
                  dir="rtl"
                  className="flex justify-between items-center mb-3 ">
                  <input
                    type="text"
                    maxLength={1}
                    className="authInput mx-1 text-center relative text-sm w-14 border-b border-x-0 border-t-0 border-black"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="authInput mx-1 text-center relative text-sm w-14 border-b border-x-0 border-t-0 border-black"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="authInput mx-1 text-center relative text-sm w-14 border-b border-x-0 border-t-0 border-black"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="authInput mx-1 text-center relative text-sm w-14 border-b border-x-0 border-t-0 border-black"
                  />
                </div>
                <div>TIMER</div>
              </div>
            )}
          </div>
          <div className="text-center">
            <Button
              className="my-4 mx-auto"
              type="primary"
              size="large"
              onClick={() =>step==1? setStep(2):handleLogin()}>
              {step == 1 ? "دریافت کد" : "تایید"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
