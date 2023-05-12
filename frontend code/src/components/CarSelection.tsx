import { useApp } from "../proviers";

export const CarSelection = () => {
  const { origin, dest, pickTime, returnTime, cars } = useApp();
  const car1 = cars[0];
  const car2 = cars[1];
  // Render
  return (
    <div className="flex flex-col w-full  bg-white p-5 ">
      <h1 className="text-end text-xl text-primary-brown-2">انتخاب ماشین</h1>
      <div className="border border-primary-gray my-5 "></div>

      {/* Car boxes */}
      <div className="flex w-full space-x-5">
        {/*left car box  */}
        <div className="flex flex-col w-1/2 border border-primary-gray p-2 border-solid">
          <div className="flex justify-between  ">
            <img
              className="border border-primary-gray p-2 w-24"
              src={car1?.image}
              alt=""
            />
            <div className="flex flex-col space-y-4 ">
              <div className="flex items-center space-x-4 justify-center ">
                <span>یازده نفر</span>{" "}
                <img src="./assets/icons/green-tick.svg" alt="" />
              </div>

              <div className="flex items-center justify-center">
                <span className="text-primary-placeholder ">
                  {new Date(pickTime).toDateString()}
                </span>
                <img src="./assets/icons/calendar.svg" alt="" />
              </div>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex w-full h-14 items-center mb-3 px-0 border border-primary-gray border-solid"
          >
            <img
              className=" items-center justify-center z-10 pr-3"
              src="./assets/icons/building.svg"
              alt=""
            />
            <input
              type="text"
              placeholder="هتل / محل اقامت"
              value={origin}
              disabled
              className="px-3 py-3 border-none placeholder:text-primary-placeholder focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
            />
          </div>
        </div>

        {/* right car box */}
        <div className="flex flex-col w-1/2 border border-primary-gray p-2 border-solid">
          <div className="flex justify-between  ">
            <img
              className="border border-primary-gray p-2 w-24"
              src={car2?.image}
              alt=""
            />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 justify-center ">
                <span>یازده نفر</span>{" "}
                <img src="./assets/icons/tick-circle.svg" alt="" />
              </div>

              <div className="flex items-center justify-center">
                <span className="text-primary-placeholder ">
                  {new Date(returnTime).toDateString()}
                </span>
                <img src="./assets/icons/calendar.svg" alt="" />
              </div>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex w-full h-14 items-center mb-3 px-0 border border-primary-gray border-solid"
          >
            <img
              className=" items-center justify-center z-10 pr-3"
              src="./assets/icons/building.svg"
              alt=""
            />
            <input
              type="text"
              value={dest}
              disabled
              placeholder="هتل / محل اقامت"
              className="px-3 py-3 border-none placeholder:text-primary-placeholder focus:border-transparent focus:ring-0 relative  rounded text-sm  w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
