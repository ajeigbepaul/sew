import { useContext } from "react";
import ThemeContext from "../contextApi/themeProvider";

const useTheme = ()=>{
    return useContext(ThemeContext)
}

export default useTheme