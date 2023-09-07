import React, {FC, useMemo, useState} from "react";
import {LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>((localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT);
    
    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);
    
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;