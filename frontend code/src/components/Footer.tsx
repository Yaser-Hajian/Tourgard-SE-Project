export const Footer = () => {
  return (
    <div className="flex flex-col h-full pt-52  px-24 bg-primary-background  font-vazir">
      <div className="relative flex py-5 items-center justify-center">
        <div className="w-14 border-t border-primary-brown-2"></div>
        <a href="/home" className="flex-shrink mx-4 text-primary-brown-2  ">
          صفحه اصلی
        </a>
        <div className="w-14 border-t border-primary-brown-2 "></div>
      </div>

      <div className="flex flex-col mx-24 space-y-8 ">
        <div dir="rtl" className="flex flex-col">
          <div className="flex">
            <img src="./assets/icons/location-icon.svg" alt="" />
            <span className="text-primary-brown-2 ">نشانی</span>
          </div>
          <span>تهران، اوین، ميدان شهيد شهرياری</span>
        </div>

        <div dir="rtl" className="flex flex-col">
          <div className="flex">
            <img src="./assets/icons/phone-icon.svg" alt="" />
            <span className="text-primary-brown-2 ">شماره تماس</span>
          </div>
          <span>021 2020 3030</span>
        </div>

        <div dir="rtl" className="flex flex-col">
          <div className="flex">
            <img src="./assets/icons/sms-icon.svg" alt="" />
            <span className="text-primary-brown-2 ">ایمیل</span>
          </div>
          <span>info@tourgard.ir</span>
        </div>
      </div>

      <div
        dir="rtl"
        className="flex h-14 items-center justify-between px-4 mt-10 bg-primary-brown-2 text-white"
      >
        <span>تمامی حقوق مادی و معنوی این وبگاه متعلق به گروه تورگرد است.</span>
        <div className="flex justify-between gap-8">
          <span>مارا دنبال کنید:</span>
          <div className="flex gap-x-8 ">
            <button>
              <img src="./assets/icons/insta-logo.svg" alt="" />
            </button>
            <button>
              <img src="./assets/icons/twitter-logo.svg" alt="" />
            </button>
            <button>
              <img src="./assets/icons/facebook-logo.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
