import { useEffect, useState } from "react";
import { createContext } from "react";


export const GlobalTheme = createContext()

export const ThemeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))
    useEffect(()=>{
        localStorage.setItem("DarkMode", darkMode)
    },[darkMode])

    const changeMood = () =>{
        setDarkMode((value)=> !value)
    }

    return(
        <GlobalTheme.Provider value={{darkMode, setDarkMode, changeMood}}>
            {children}
        </GlobalTheme.Provider>
    )
}
