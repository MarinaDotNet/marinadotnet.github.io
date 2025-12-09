import LightThemeIcon from "../jointLayoutComponents/LightThemeIcon";
import DarkThemeIcon from "../jointLayoutComponents/DarkThemeIcon";
import {ThemeContext} from "../jointLayoutComponents/ThemeContext";
import {useContext} from "react";

export default function SideBar(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div className="side-bar">
            <a id={theme}
            type="button"
            onClick={toggleTheme}
            className="color-theme-icon"
            title="Change Theme">
                {theme === "light"
                ? <LightThemeIcon />
                : <DarkThemeIcon />}
            </a>
        </div>
    );
}