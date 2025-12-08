import DarkThemeIcon from "../jointLayoutComponents/DarkThemeIcon";
import LightThemeIcon from "../jointLayoutComponents/LightThemeIcon";
import {ThemeContext} from "../ThemeContext";
import {useContext} from "react";

/**
 * DecorativeTopPageLine
 *
 * A top-of-page decorative header bar that displays the site's title
 * and a theme-toggle button. The component consumes `ThemeContext`
 * to access the current theme ("light" or "dark") and the toggle function.
 *
 * Display behavior:
 * - Shows the site label: "MarinaDotNet.Portfolio".
 * - Renders a theme icon (`LightThemeIcon` or `DarkThemeIcon`)
 *   depending on the active theme.
 * - Clicking the icon toggles between light and dark themes.
 *
 * Accessibility / UI details:
 * - Uses `title="Change Theme"` for hover tooltip.
 * - The icon wrapper `<a>` element receives an `id` matching the theme,
 *   allowing theme-specific CSS styling.
 *
 * @returns {JSX.Element} A header stripe with a clickable theme toggle icon.
 */

export default function DecorativeTopPageLine(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <div className="header-stripe">
            <span className="text-primary">MarinaDotNet.Portfolio</span>
            <a id={theme}
            type="button"
            onClick={toggleTheme}
            className="color-theme-icon"
            title="Change Theme">
                {
                    theme === "light"
                    ? <LightThemeIcon />
                    : <DarkThemeIcon />
                }
            </a>
        </div>
    );
};