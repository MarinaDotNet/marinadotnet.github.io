import LightThemeIcon from "../jointLayoutComponents/LightThemeIcon";
import DarkThemeIcon from "../jointLayoutComponents/DarkThemeIcon";
import {ThemeContext} from "../jointLayoutComponents/ThemeContext";
import {useContext} from "react";

import {Download, Github, Linkedin, Mail, Facebook, BriefcaseBusiness} from "lucide-react";

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
                <button 
                className="download-btn" 
                title="Visit me at GitHub"
                onClick={() => {window.open("https://github.com/marinadotnet", "_blank");}}
                >
                    <Github className="icon" />
                </button>
            </div>

            <div className="download-wrapper">
                <button 
                className="download-btn" 
                title="Visit me at LinkedIn"
                onClick={() => {window.open("https://www.linkedin.com/in/marina-sichova-333599281", "_blank");}}
                >
                    <Linkedin className="icon" />
                </button>
            </div>

            <div className="download-wrapper">
                <button 
                className="download-btn" 
                title="Send me an email"
                onClick={() => {window.location.href="mailto: msichova@outlook.com";}}
                >
                    <Mail className="icon" />
                </button>
            </div>

            <div className="download-wrapper">
                <button 
                className="download-btn" 
                title="Visit me at Facebook"
                onClick={() => {window.open("https://www.facebook.com/msichova/", "_blank");}}
                >
                    <Facebook className="icon" />
                </button>
            </div>
            <div className="full-line"></div>
            <div className="download-wrapper">
                <button 
                className="download-btn" 
                onClick={() => {window.open("https://raw.githubusercontent.com/MarinaDotNet/marinadotnet.github.io/main/static/files/cv.pdf", "_blank");}}
                >
                    <Download className="icon" />
                    <span>PDF</span>
                </button>
            </div>

            <div className="download-wrapper">
                <button 
                className="download-btn" 
                onClick={() => {window.open("https://raw.githubusercontent.com/MarinaDotNet/marinadotnet.github.io/main/static/files/cv.docx", "_blank", "noopener,noreferrer");}}
                >
                    <Download className="icon" />
                    <span>DOC</span>
                </button>
            </div>

            <div className="download-wrapper">
                <button 
                className="download-btn" 
                title="Download PNG resume"
                onClick={()  => {window.open("https://raw.githubusercontent.com/MarinaDotNet/marinadotnet.github.io/main/static/files/cv.png", "_blank", "noopener,noreferrer");}}
                >
                    <Download className="icon" />
                    <span>PNG</span>
                </button>
            </div>

            <div className="download-wrapper">
                <button 
                className="download-btn" 
                title="Look at my simple/static Portfolio "
                onClick={() => {window.open("https://marinadotnet.github.io/static", "_blank");}}
                >
                    <BriefcaseBusiness className="icon" />
                    <span>Portfolio Static</span>
                </button>
            </div>

        </div>
    );
}