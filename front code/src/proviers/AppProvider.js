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

  //   Methods
  const search = async () => {
    const { data } = await axios.post(
      "http://localhost:4000/reservation/search"
    );
    setCars(data);
  };

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
    cars,
  };

  // Render
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { AppProvider };
