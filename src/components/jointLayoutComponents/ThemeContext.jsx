import React, {createContext, useState, useEffect} from 'react';

/**
 * A React context that exposes the current theme ("light" or "dark")
 * and a function to toggle between the two.
 * 
 * @type {React.Context<{
 * theme : string,
 * toggleTheme: () => void 
 * }>
 * }
 */
const ThemeContext = createContext();

/**
 * ThemeProvider
 *
 * Provides theme state and a toggle function to all descendants.
 * 
 * Behavior:
 * - Initializes theme from localStorage (defaults to "dark").
 * - Persists theme changes back to localStorage.
 * - Applies the corresponding CSS class (`light-theme` or `dark-theme`)
 *   to the document body.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children — Components that need access to theme context.
 *
 * @returns {JSX.Element} Context provider containing `theme` and `toggleTheme`.
 */
function ThemeProvider({children}){
    const [theme, setTheme] = useState(() => {
       return localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "dark"
    });

    useEffect(() => {
        document.body.className = theme === "light" ? "light-theme" : "dark-theme";
        localStorage.setItem("theme", theme);
    }, [theme]);

    /**
    * Toggles between light and dark themes.
    */
    function toggleTheme(){
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};