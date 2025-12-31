import DarkThemeIcon from "../jointLayoutComponents/DarkThemeIcon";
import LightThemeIcon from "../jointLayoutComponents/LightThemeIcon";
import {ThemeContext} from "../ThemeContext";
import {useContext} from "react";

/**
 * DecorativeTopPageLine
 *
 * A top-of-page decorative header bar for desktop layouts.
 * Displays the site's title and a theme-toggle button.
 *
 * Props:
 * @param {string} viewMode - The current view mode ("developer" or "user").
 * @param {function} setViewMode - Function to update the view mode.
 *
 * Behavior:
 * - Shows a select dropdown to switch between Developer View and User View.
 * - Shows the site label: "MarinaDotNet.Portfolio".
 * - Renders a theme icon (`LightThemeIcon` or `DarkThemeIcon`) based on the current theme.
 * - Clicking the icon toggles the theme between light and dark.
 *
 * Accessibility / UI details:
 * - Uses `title="Change Theme"` for hover tooltip on the icon.
 * - The icon wrapper `<a>` element receives an `id` matching the theme for CSS styling.
 *
 * @returns {JSX.Element} A decorative desktop header with a view mode selector and theme toggle.
 */
export default function DecorativeTopPageLine({viewMode, setViewMode}){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div className="header-stripe">
                <select
                    id="view"
                    className="view-mode-select"
                    value={viewMode}
                    onChange={e => setViewMode(e.target.value)}
                >
                    <option value="developer">Developer View</option>
                    <option value="user">User View</option>
                </select>
                <span className="text-primary stripe-text">MarinaDotNet.Portfolio</span>

                <a id={theme}
                type="button"
                onClick={toggleTheme}
                className="color-theme-icon"
                title="Change Theme" >
                    {
                        theme === "light"
                        ? <LightThemeIcon />
                        : <DarkThemeIcon />
                    }
                </a>

        </div>
    );
};