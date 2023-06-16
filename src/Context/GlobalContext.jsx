import { createContext, useState } from "react";
import Fruits from "../Data/FruitsData.json";
import { useTranslation } from "react-i18next";
import axios from "axios";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen((value) => !value);
  };

  const [category, setCategory] = useState([
    "All",
    "Oranges",
    "Fresh Meat",
    "Vegetables",
    "Fastfood",
  ]);

  const [data, setData] = useState(Fruits);

  const myFilter = (category) => {
    const filtered = Fruits.filter((item) => {
      return item.category === category;
    });
    setData(filtered);
  };

  const [detailData, setDetailData] = useState([]);

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setDetailData(res.data));

  return (
    <GlobalContext.Provider
      value={{ isOpen, toggleMenu, data, myFilter, category, detailData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
