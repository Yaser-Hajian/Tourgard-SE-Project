import { TourDetailBox } from "./TourDetailBox";

export const HeroSection = () => {
  return (
    <div className="flex w-full items-center justify-between h-full gap-x-10">
      <div className="w-1/2 h-full">
        <img src="./assets/images/hero-guy.png" alt="" />
      </div>
      <div className="flex flex-col w-1/2 mr-8 space-y-24 h-full ">
        <h1
          dir=""
          className="w-full text-5xl mt-24 text-center font-bold font-vazir"
        >
          حمل و نقل خود را به ما بسپارید
        </h1>
        <TourDetailBox />
      </div>
    </div>
  );
};
