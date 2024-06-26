import { createContext, useContext, useState } from "react";
import useLoading from "../hooks/useLoading";

const UnitContext = createContext();

export const useUnit = () => useContext(UnitContext);

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState();
  const [loading, setLoading] = useLoading();
};
