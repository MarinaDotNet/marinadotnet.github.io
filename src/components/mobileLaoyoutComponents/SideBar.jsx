import LightThemeIcon from "../jointLayoutComponents/LightThemeIcon";
import DarkThemeIcon from "../jointLayoutComponents/DarkThemeIcon";
import {ThemeContext} from "../jointLayoutComponents/ThemeContext";
import {useContext} from "react";

import {Download, Github, Linkedin, Mail, Facebook} from "lucide-react";

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
            
            <div className="download-wrapper">
                <button className="download-btn" title="Download PNG resume">
                    <Github className="icon" />
                </button>
            </div>

            <div className="download-wrapper">
                <button className="download-btn" title="Download PNG resume">
                    <Linkedin className="icon" />
                </button>
            </div>

            <div className="download-wrapper">
                <button className="download-btn" title="Download PNG resume">
                    <Mail className="icon" />
                </button>
            </div>

            <div className="download-wrapper">
                <button className="download-btn" title="Download PNG resume">
                    <Facebook className="icon" />
                </button>
            </div>
            <div class="full-line"></div>
            <div className="download-wrapper">
                <button className="download-btn" title="Download PDF resume">
                    <Download className="icon" />
                    <span>PDF</span>
                </button>
            </div>

            <div className="download-wrapper">
                <button className="download-btn" title="Download DOC resume">
                    <Download className="icon" />
                    <span>DOC</span>
                </button>
            </div>

            <div className="download-wrapper">
                <button className="download-btn" title="Download PNG resume">
                    <Download className="icon" />
                    <span>PNG</span>
                </button>
            </div>

        </div>
    );
}