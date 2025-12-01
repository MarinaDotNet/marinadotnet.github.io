import React, {createContext, useState, useEffect} from 'react';

/*
* ThemeContext provides the access to the current theme chosen by user if choosed previously 
* and toggle function for switching between themes.
*/

const ThemeContext = createContext();

/*
* ThemeProvider wraps the application and manages the global theme state 
* Responsibilities:
* - Loads initial theme from localStorage
* - Applies the theme class to the <body>
* - Persist theme changes to localStorage
*/
function ThemeProvider({children}){
    //Initialize the theme from localStorage or fall back to "dark"
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    //Effect that updates the document body class and stores the theme in localStorage
    useEffect(() => {
        //apply class to body for styling purposes
        document.body.className = theme === 'light' ? "light-theme" : "";

        //persist theme value
        localStorage.setItem("theme", theme);
    }, [theme])

    //toggle between 'light' and 'dark' theme
    function toggleTheme(){
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};