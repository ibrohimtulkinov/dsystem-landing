import { LangContext } from "../contexts/langContext"
import { content } from "../utils/contents"
import { useContext } from "react"

export const useTranslation = () => {
    const {lang, setLang} = useContext(LangContext)

    const t = (key) => {
        const value = content?.[lang]?.[key]
        return value || key
    }

    const changeLang = (lang) => {
        setLang(lang)
        localStorage.setItem("lang", lang)
    }

    return {t, changeLang, lang}
}