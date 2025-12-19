import {useState, useContext, useEffect, useRef} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {ThemeContext} from "./ThemeContext";
import ConsoleSimulator from "../jointLayoutComponents/ConsoleSimulator";

/**
 * Imitation of the Visual Studio Developer PowerShell.
 *
 * Supports navigation commands between pages:
 *  - 'h' or 'home' or 'home.cs' or '/home.cs' to navigate to the home/index page,
 *  - 'p' or 'projects' or 'projects.cs' or '/projects.cs' to navigate to the projects page,
 *  - 's' or 'skills' or 'skills.cs' or '/skills.cs'  to navigate to the skills page,
 *  - 'a' or 'about_me' or 'about_me.cs' or '/about_me.cs'  to navigate to the aboutme page,
 *  - 'c' or 'contact' or 'contact.cs' or '/contact.cs'  to navigate to the contact page,
 * 
 * Other supported commands:
 *  - 'theme' or 'switch-theme' or 'th' the switching color theme command,
 *  - 'help' command that displays the list of available commands,
 *  - 'cls' or 'clear' to clear the DeveloperPowerShell all output.
 *
 * @returns {JSX.Element}
 */
export default function DeveloperPowerShell()
{
    /**
     * Controls whether console command animation is enabled.
     *
     * - State is persisted in localStorage under the key `isAnimationOn`
     * - localStorage stores values as strings, so explicit boolean parsing is required
     * - Default value is `true` if nothing is stored
     */
    const [isAnimationOn, setIsAnimationOn] =  useState(() => {
        const stored = localStorage.getItem("isAnimationOn");
        return stored === null ? true : stored === "true";
    });

    /**
     * Synchronizes animation state with localStorage
     * whenever the value changes.
     */
    useEffect(() => {
        localStorage.setItem("isAnimationOn", isAnimationOn);
    }, [isAnimationOn]);

    /**
     * Toggles console animation on/off.
     * Safe to call from UI buttons or console commands.
     */
    function toggleAnimation(){
        setIsAnimationOn(prev => !prev);
    };

    // Default boot message lines displayed in the PowerShell
    const defaultLines = [
        "**********************************************",
        "MarinaDotNet Developer 2025 Portfolio v2.1",
        "** Copyright © 2025 Marina Sichova",
        "**********************************************",
        <span>Type '<span className="cmd">help</span>' for commands.</span>];

     // State for console lines and user input
    const [lines, setLines] = useState(defaultLines);
    const [userInput, setUserInput] = useState("");
    // Active command, what user just entered
    const [activeCommand, setActiveCommand] = useState(null);

    // Reference to scroll the console to the bottom on new output
    const consoleRef = useRef(null);
    useEffect(() => {
        if(consoleRef.current){
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [lines]);

    // React Router navigation hook
    const navigate = useNavigate();

    // Access toggleTheme from context
    const {toggleTheme} = useContext(ThemeContext);

    // Processes a command typed by the user
    const handleCommand = (cmd) => 
    {
        const cmdToLower = cmd.toLowerCase();
        switch(cmdToLower)
        {
             case "help": 
            {
                const helpText = (
                        <span key={cmd}>
                            Available commands:<br />
                            press <span className="cmd"> /home.cs</span> or <span className="cmd">home</span> or <span  className="cmd">h</span> to go to home page,<br />
                            press <span className="cmd"> /projects.cs</span> or <span className="cmd">projects</span> or <span className="cmd">p</span> to go to projects page,<br />
                            press <span className="cmd"> /skills.cs</span> or <span  className="cmd">skills</span> or <span  className="cmd">s</span> to go to skills page,<br />
                            press <span className="cmd"> /about_me.cs</span> or <span  className="cmd">about_me</span> or <span  className="cmd">a</span> to go to about_me page,<br />
                            press <span className="cmd"> /contact.cs</span> or <span  className="cmd">contact</span> or <span className="cmd">c</span> to go to contact page,<br />
                            press <span className="cmd"> switch-theme</span> or <span  className="cmd">theme</span> or <span className="cmd">th</span> to switch color theme,<br />
                            press <span className="cmd"> clear</span> or <span  className="cmd">cls</span> to clear the console
                        </span>
                    );
                setLines(prev => [...prev, <span className="cmd">{">" + cmd}</span>, helpText]);
                return;
            }

            case "clear":
            case "cls":
                {/* Reset to default lines */}
                setLines(defaultLines);
                return;

            default:
                { 
                    const navigatableCommands = [
                        "h", "home", "home.cs", "/home.cs",
                        "p", "projects", "projects.cs", "/projects.cs",
                        "s", "skills", "skills.cs", "/skills.cs",
                        "a", "about_me", "about_me.cs", "/about_me.cs",
                        "c", "contact", "contact.cs", "/contact.cs",
                        "theme", "switch-theme", "th"
                    ];
                

                setLines(prev => [...prev, <span className="cmd">{">" + cmd}</span>]);

                if(navigatableCommands.includes(cmdToLower))
                {
                    // Prevent duplicate command execution
                    if(activeCommand)
                    {
                        return;
                    }

                    if(isAnimationOn)
                    {
                        setActiveCommand(cmd); // turn on animation
                        navigate('/transition');
                    }
                    else
                    {
                        executeCommand(cmd); // without animation, just execute command
                    }
                }
                else
                {
                    // if the user entered not supported command
                    setLines(prev => 
                    [
                        ...prev,
                        <span key="cmd" className="text-warning">
                            Unknown command: <span className="cmd-warning"> '{cmd}'</span>, try '<span className="cmd">help</span>'
                        </span>
                    ]);
                }
            }   
        }
    };
    
    const executeCommand = (cmd) => {
        const cmdToLower = cmd.toLowerCase();
        switch (cmdToLower) {
            case "h":
            case "home":
            case "home.cs":
            case "/home.cs":
                navigate("/");
                break;
            case "p":
            case "projects":
            case "projects.cs":
            case "/projects.cs":
                navigate("/projects");
                break;
            case "s":
            case "skills":
            case "skills.cs":
            case "/skills.cs":
                navigate("/skills");
                break;
            case "a":
            case "about_me":
            case "about_me.cs":
            case "/about_me.cs":
                navigate("/aboutme");
                break;
            case "c":
            case "contact":
            case "contact.cs":
            case "/contact.cs":
                navigate("/contact");
                break;
            case "th":
            case "theme":
            case "switch-theme":
                if(isAnimationOn)
                {
                    navigate(-1);
                } 
                toggleTheme();
                break;
        }
    };

    // Handles form submission (Enter key)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!userInput.trim()){
            return;
        }
        handleCommand(userInput.trim());
        setUserInput("");
    };

    let location = useLocation();
    const path = location.pathname === "/" ? "/home" : location.pathname;

    return(
    <div className="footer">
        {/* PowerShell header with title and window control icons */}
        <div className="developer-powershell-header">
                <span className="console-window-header">Developer Powershell</span>
                <div className="divider-expandable">
                {/* divider-expandable div end*/}
                </div>
                <div className="window-controls">
                    {/* Window control buttons: collapse, resize, close */}
                    <button className="btn-icon-window icon-controls" title="immitation of button">
                        {/* down arrow */}
                        <svg width="8" height="5.5" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.91713 8.55482L0.42433 0.174181H11.4099L5.91713 8.55482Z" fill="var(--color-text-primary)" />
                        </svg>
                    </button>
                    <button className="btn-icon-window icon-controls" title="immitation of button">
                        {/* square and line */}
                        <svg width="10.5" height="4" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6.9834" y="0.174164" width="9.06077" height="5.5871" fill="var(--color-text-primary)" />
                        <line x1="6.9834" y1="3.46773" x2="0.187819" y2="3.46773" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>
                    <button className="btn-icon-window icon-controls" title="immitation of button">
                        {/* X icon */}
                        <svg width="9.5" height="7.5" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="15.4324" y2="-0.5" transform="matrix(0.689722 -0.724074 0.804166 0.594405 1.91307 12.5548)" stroke="var(--color-text-primary)" />
                        <line y1="-0.5" x2="15.7742" y2="-0.5" transform="matrix(0.804166 0.594405 -0.689722 0.724074 0.972366 2.37035)" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>
                {/* properties-windows-controls div end */}
                </div>
        {/* developer-powershell-header div end */}
        </div>
        {/* Command bar with icons */}
        <div className="powershell-bar">
            {/* + icon */}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22727 10.7525V0.405953H6.22443V10.7525H5.22727ZM0.556818 6.08209V5.07641H10.8949V6.08209H0.556818Z" fill="var(--color-accent-green)"/>
            </svg>
            Developer PowerShell 
                {/* down arrow */}
                <svg width="9" height="6" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.91713 8.55482L0.42433 0.174181H11.4099L5.91713 8.55482Z" fill="var(--color-text-primary)" />
                </svg>
                <div className="divider-vertical divider-single-solid"></div>

                {/* copy icon */}
                <svg width="10" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.02942" y="0.769226" width="7.47059" height="9.35043" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                    <rect x="0.5" y="5.94443" width="7.47059" height="9.35043" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                </svg>

                {/* paste icon */}
                <svg width="10" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5717 0.769226C7.42272 0.769378 8.92815 2.28069 8.92815 4.15106C8.92792 6.02123 7.42258 7.53177 5.5717 7.53192C3.72069 7.53192 2.21451 6.02133 2.21428 4.15106C2.21428 2.2806 3.72055 0.769226 5.5717 0.769226Z" fill="#0F0F2E" stroke="#A1A1A1"/>
                    <rect x="0.5" y="3.09808" width="9.28571" height="9.86795" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                    <rect x="7.35715" y="10.8609" width="4.14286" height="4.43397" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                </svg>
                <div className="divider-vertical divider-single-solid"></div>

                <button
                className="animation-toggle-button"
                title="Toggle console animation"
                onClick={() => toggleAnimation()}>
                    {isAnimationOn ? 'Animation ON' : 'Animation OFF'}
                </button>
                <div className="divider-vertical divider-single-solid"></div>

        {/* powershell-bar div end */}
        </div>

         {/* Console output area */}
        <div className="console-window" ref={consoleRef}>
            {lines.map((line, index) =>(
                <div key={index} className="console-line">
                {line}
                </div>
            ))}

           {activeCommand && (
                <ConsoleSimulator
                    isAnimationOn={isAnimationOn}
                    commandKey={activeCommand}
                    onLineComplete={(line) => setLines(prev => [...prev, line])}
                    onComplete={() => {
                        executeCommand(activeCommand.toLowerCase());
                        setActiveCommand(null);
                        }}
                />
            )}

            <form onSubmit={handleSubmit} className="console-input-form" name="consoleForm">
                <span name="consolePrefics" className="console-prefics">{"PS MarinaDotNet.github.io/#" + path + ">"}</span>
                <input
                name="consoleInput"
                className="console-input"
                type="text"
                title="The Developer Powershell imitation, enter 'help'"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={!!activeCommand}
                autoFocus />
            </form>
        </div>
    {/* footer div end */}
    </div>
    );

}