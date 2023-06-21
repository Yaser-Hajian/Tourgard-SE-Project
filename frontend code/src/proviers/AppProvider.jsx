import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  createReservationService,
  findReservationService,
  searchReservationService,
} from "../service/api/reservation";
import { getUserCoreDataService } from "../service/api/user";
import { showPromisToast, showToast } from "../utils/toastifyPromise";

const Context = createContext();

export const useApp = () => useContext(Context);

const AppProvider = ({ children }) => {
  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [cars, setCars] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [translator, setTranslator] = useState(null);

  const [userData, setUserData] = useState({});
  const [reservationData, setReservationData] = useState({});

  //   Methods
  const searchReservation = async () => {
    try {
      const { data } = await showPromisToast(searchReservationService());

      setCars(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const createReservation = async () => {
    try {
      const jsonData = {
        origin: origin,
        destination: dest,
        pick_up_date: pickTime,
        pick_up_time: returnTime,
        f_name: lastName,
        l_name: firstName,
        email: email,
        phone_number: phoneNumber,
        language: translator?.value,
      };
      const { data, status } = await showPromisToast(
        createReservationService(jsonData)
      );
      if (status == 201) {
        setReservationData(data);
      } else {
        showToast("مشکلی پیش آمده", "error");
      }
      console.log(data);
    } catch (error) {
      showToast("لطفا اطلاعات مهم را قبل از ثبت نهایی وارد کنید", "info");
    }
  };

  const findReservation = async (uuid) => {
      try {
        const { data, status } = await showPromisToast(
          findReservationService(uuid)
        );
        if (status == 200) {
          setReservationData(data[0]);
        } else {
          showToast("کد پیگیری وارد شده یافت نشد", "info");
        }
      } catch (error) {
        console.log("error", error);
      }
  };

  const getUserCoreData = async () => {
    const phone = localStorage.getItem("phone");
    if (phone) {
      try {
        const { data, status } = await getUserCoreDataService({
          phone_number: phone,
        });
        if (status == 201) {
          setUserData(data);
        } else {
          localStorage.removeItem("phone");
          showToast("مشکلی پیش آمده", "error");
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setUserData({});
    }
  };

  const loginUser = async () => {
    if (phoneNumber.length == 10) {
      try {
        const { data, status } = await showPromisToast(
          getUserCoreDataService({
            phone_number: phoneNumber,
          })
        );
        if (status == 201) {
          localStorage.setItem("phone", phoneNumber);
          setUserData(data);
        } else {
          localStorage.removeItem("phone");
          showToast("مشکلی پیش آمده", "error");
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      showToast(
        "لطفا شماره معتبر وارد کنید شماره باید شامل 10 رقم باشد",
        "info"
      );
    }
  };

  // Binding
  const value = {
    userData,

    origin,
    setOrigin,
    dest,
    setDest,
    pickTime,
    setPickTime,
    returnTime,
    setReturnTime,

    // search,
    searchReservation,
    createReservation,
    cars,

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

    reservationData,
    setReservationData,

    getUserCoreData,
    findReservation,
    loginUser,
  };

  // Render
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { AppProvider };
