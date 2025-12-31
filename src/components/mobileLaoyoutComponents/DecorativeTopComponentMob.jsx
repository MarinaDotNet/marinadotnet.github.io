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
    return(
        <div className="decorative-top-mobile">
                <select
                    id="view"
                    className="view-mode-select"
                    value={viewMode}
                    onChange={e => setViewMode(e.target.value)}
                >
                    <option value="developer">Developer View</option>
                    <option value="user">User View</option>
                </select>
            <span className="text-primary">MarinaDotNet.Portfolio</span>
        </div>
    );
}