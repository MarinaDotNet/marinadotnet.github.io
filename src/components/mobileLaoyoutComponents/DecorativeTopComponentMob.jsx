import {createSiteTour} from "../SiteTour";
import Logo from "../../assets/logo_sm.svg?react";

/**
 * DecorativeTopComponentMob
 *
 * A simulation of the main menu and toolbar of Visual Studio for small screens.
 * This component is purely decorative and does not provide actual IDE functionality.
 *
 * Props:
 * @param {string} viewMode - The current view mode ("developer" or "user").
 * @param {function} setViewMode - Function to update the view mode.
 *
 * Behavior:
 * - Displays a select dropdown to switch between Developer View and User View.
 * - Displays the site label: "MarinaDotNet.Portfolio".
 *
 * @returns {JSX.Element} A top-of-page decorative mobile header with a view mode selector.
 */
export default function DecorativeTopComponentMob({viewMode, setViewMode}){
    const tour = createSiteTour();
    
        const startTour = () => {
            tour.drive();
        };

    return(
        <div className="decorative-top-mobile">
                <select
                    data-tour="site-view-mode"
                    id="view"
                    className="view-mode-select"
                    value={viewMode}
                    onChange={e => setViewMode(e.target.value)}
                >
                    <option value="developer">Developer View</option>
                    <option value="user">User View</option>
                </select>
            <div className="logo-header">
                <Logo className="logo-in-header"/>
                <span className="text-primary">NetByMarina.Portfolio</span>
            </div>
            <button className="site-tour-button" data-tour="site-tour" title="Press to start Site Tour" type="button" onClick={startTour}> ? Help </button>
        </div>
    );
}