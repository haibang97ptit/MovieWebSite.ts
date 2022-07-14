import { PropTypes } from "@material-ui/core";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps{
    children : ReactNode
}
interface ThemeContextDefault {
    theme : PropTypes.Color
    toggleTheme : (theme: PropTypes.Color) => void
}
const ThemeContextDefaultData ={
    theme : 'primary' as PropTypes.Color,
    toggleTheme : () => {}
}
export const ThemeContext = createContext<ThemeContextDefault>(ThemeContextDefaultData)
const  ThemeContextProvider = ({children} : ThemeContextProps) =>{
    const [theme,setTheme] = useState<PropTypes.Color>(ThemeContextDefaultData.theme)
    const toggleTheme = (theme : PropTypes.Color) => {setTheme(theme)}
    const dataTheme = {theme , toggleTheme} 
    return <ThemeContext.Provider value={dataTheme}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider