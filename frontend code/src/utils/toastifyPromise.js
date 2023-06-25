import { toast } from "react-toastify";

export const showPromisToast = (fun) => {
  return toast.promise(fun, {
    hideProgressBar: true,
    rtl: true,
    autoClose: 1000,
    pending: "درحال ارسال درخواست شما به سرور",
    success: "درخواست انجام شد",
    error: "متاسفانه درخواست انجام نشد",
  });
};
export const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
      });
      break;
    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
      });
      break;

    default:
      break;
  }
};
