import { useApp } from "../proviers";
import TextArea from "antd/es/input/TextArea";
import { PaymentBox } from "../components/PaymentBox";
import { CarSelection } from "../components/CarSelection";
import Select from "react-select";
import { useState } from "react";

const TransferDetail = () => {

  const [toolsDropDown, setToolsDropDown] = useState(null);

  const [handleShowingDropDown, setHandleShowingDropDown] = useState({
    translator:false,
    tools:false
  })

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

    translator,
    setTranslator,
  } = useApp();

  const translatorDropDownOption = [
    { value: "English", label: "انگلیسی" },
    { value: "English", label: "فارسی" },
    { value: "Turkish", label: "ترکی" },
    // { value: "Turkish", label: "فرانسوی" },
    // { value: "c", label: "چینی" },
    // { value: "e", label: "عربی" },
  ];
  const toolsDropDownOption = [
    { value: "a", label: "پرستار بجه" },
    { value: "b", label: "کالسکه" },
    { value: "c", label: "پذیرایی(شیرنی و نوشیدنی)" },
  ];

  const rotateDropDownArrow = {
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
  };

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
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid">
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
                className="flex w-1/2 h-14 items-center mb-3 px-2  border border-primary-gray border-solid">
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
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid">
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
                className="flex w-1/2 h-14 items-center mb-3 px-2 border border-primary-gray border-solid">
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
            <div className="  my-10">
              <div className="flex flex-row-reverse items-center justify-between mb-6 relative h-10">
                <div className="flex items-center justify-end w-1/2 h-full">
                  <input type="checkbox" name="" id="" onChange={e=> setHandleShowingDropDown({...handleShowingDropDown,translator:e.target.checked})}/>
                  <span className=" ml-3 text-sm text-primary-placeholder">
                    آیا به مترجم نیاز دارید؟
                  </span>
                </div>
                <div className="flex items-center justify-end text-right ml-auto w-1/2">
                  {handleShowingDropDown.translator&&(
                  <Select
                    isRtl
                    isSearchable={false}
                    className=" w-[270px] rounded-none text-sm"
                    classNamePrefix={"rounded-none"}
                    styles={rotateDropDownArrow}
                    placeholder="زبان مترجم خود را انتخاب کنید"
                    value={translator}
                    onChange={setTranslator}
                    options={translatorDropDownOption}
                  />
                  )}
                </div>
              </div>
              <div className="flex flex-row-reverse items-baseline justify-between mt-6 h-10">
                <div className="flex items-center justify-end w-1/2 h-full">
                  <input type="checkbox" name="" id="" onChange={e=> setHandleShowingDropDown({...handleShowingDropDown,tools:e.target.checked})}/>
                  <span className=" ml-3 text-sm text-primary-placeholder">
                    آیا به ملزومات دیگری نیاز دارید؟
                  </span>
                </div>
                <div className="flex items-center justify-end text-right ml-auto w-1/2">
                  {handleShowingDropDown.tools&&(
                  <Select
                    isRtl
                    isSearchable={false}
                    className=" w-[270px] rounded-none text-sm outline-none focus:outline-0"
                    classNamePrefix={"rounded-none"}
                    styles={rotateDropDownArrow}
                    placeholder="ملزومات مورد نیاز خود را انتخاب کنید"
                    value={toolsDropDown}
                    onChange={setToolsDropDown}
                    options={toolsDropDownOption}
                  />
                  )}
                </div>
              </div>
            </div>
            <div dir="rtl" className="flex max-h-xs w-full flex-wrap mb-3">
              <TextArea
                placeholder="توضیحات..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="h-full px-3 max-h-48 placeholder:text-gray-500 py-3 placeholder:align-text-top rounded-none text-sm border border-primary-gray font-vazir"
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

export default TransferDetail;
