import { createContext, useState } from "react";
import Fruits from '../Data/FruitsData.json'
import { useTranslation } from "react-i18next";

export const GlobalContext = createContext()



export const ContextProvider = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const {t} = useTranslation()

    const toggleMenu = () =>{
        setIsOpen((value)=> !value)
    }

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

      
     
      

    return(
        <GlobalContext.Provider value={{isOpen, toggleMenu, data, myFilter, category}}>
            {children}
        </GlobalContext.Provider>
    )

}