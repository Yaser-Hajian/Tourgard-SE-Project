import { useApp } from "../proviers";
import TextArea from "antd/es/input/TextArea";
import { PaymentBox } from "../components/PaymentBox";
import { CarSelection } from "../components/CarSelection";

export const TransferDetail = () => {
  // States and Hooks
  const {
    firstName,
    setFirstName,

    lastName,
    setLastName,

    notes,
    setNotes,

    email,
    setEmail,

    phoneNumber,
    setPhoneNumber,
  } = useApp();

  // Render
  return (
    <div className="flex flex-col  px-24 font-vazir bg-primary-background  ">
      <div className="flex items-center justify-center mt-20 bg-primary-background">
        <img src="./assets/icons/step-two.svg" alt="" />
      </div>
      {/* forms */}
      <div className="flex space-x-12 mt-24">
        {/* left form */}
        <div className="flex flex-col w-3/5 ">
          <div className="flex flex-col w-full bg-white p-5 mb-5">
            <h1 className="text-end text-xl text-primary-brown-2">
              اطلاعات شخصی
            </h1>
            <div className="border border-primary-gray my-5 "></div>
            <div className="flex w-full space-x-5 ">
              <div
                dir="rtl"
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid"
              >
                <img
                  className=" items-center justify-center z-10"
                  src="./assets/icons/user.svg"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-3 py-3 relative rounded text-sm w-full border-none"
                />
              </div>

              <div
                dir="rtl"
                className="flex w-1/2 h-14 items-center mb-3 px-2  border border-primary-gray border-solid"
              >
                <img
                  className=" items-center justify-center z-10"
                  src="./assets/icons/user.svg"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="نام"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-3 py-3 border-none focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
                />
              </div>
            </div>

            {/* Second line of input */}
            <div className="flex w-full  space-x-5">
              <div
                dir="rtl"
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid"
              >
                <img
                  className=" items-center justify-center z-10"
                  src="./assets/icons/sms-icon.svg"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-3 border-none focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
                />
              </div>

              <div
                dir="rtl"
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid"
              >
                <img
                  className=" items-center justify-center z-10"
                  src="./assets/icons/phone-icon.svg"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="شماره تماس"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="px-3 py-3 border-none focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
                />
              </div>
            </div>
            <div dir="rtl" className="flex h-32 w-full flex-wrap mb-3">
              <TextArea
                placeholder="توضیحات..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="h-full px-3 placeholder:text-gray-500 py-3 placeholder:align-text-top rounded-none text-sm border border-primary-gray font-vazir"
              />
            </div>
          </div>
          <CarSelection />
        </div>

        {/* right form */}
        <div className="w-2/5 border border-primary-gray">
          <PaymentBox />
        </div>
      </div>
    </div>
  );
};
