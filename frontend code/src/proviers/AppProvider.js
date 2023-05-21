import { createContext, useContext, useState } from "react";
import axios from "axios";

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

  //   Methods
  const search = async () => {
    const { data } = await axios.post(
      "http://localhost:4000/reservation/search"
    );
    setCars(data);
  };

  const createReservation = async () =>
    await axios.post("http://localhost:4000/reservation/create", {
      origin: origin,
      destination: dest,
      pick_up_date: pickTime,
      pick_up_time: returnTime,
      f_name: lastName,
      l_name: firstName,
      email: email,
      phone_number: phoneNumber,
    });

  // Binding
  const value = {
    origin,
    setOrigin,
    dest,
    setDest,
    pickTime,
    setPickTime,
    returnTime,
    setReturnTime,

    search,
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
  };

  // Render
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { AppProvider };
