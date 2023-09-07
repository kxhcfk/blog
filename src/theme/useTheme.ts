import {LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useCallback, useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        
        setTheme(newTheme);
        localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
    }, [theme]);
    
    return {
        toggleTheme,
        theme,
    };
};