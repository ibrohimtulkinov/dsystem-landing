import {createContext, useEffect, useState} from "react"

export const LangContext = createContext()

export const LangContextProvider = ({children}) => {

    const [lang, setLang] = useState("ru")

    useEffect(() => {
        if(localStorage.getItem("lang")){
            setLang(localStorage.getItem("lang") || "ru")
        }
    }, [])

    return <LangContext.Provider value={{lang, setLang}}  >
        {children}
    </LangContext.Provider>
}
