 /**
  * CollapsedNavBar component
  * 
  * A state less functional that renders a humburger-style button
  * used to toggle the visibility of responsive navigation bar
  * 
  * @param {Function} toggle
  * A function passed down from parent component.
  * Called on button click to update the state controlling the navigation bar's visibility.
  *  Required for component to function
  * @returns humburger icon button
  */
export default function ColapsedNavBar({ toggle }) {
    return (
        <button 
            title="icon-hamburger" 
            className="hamburger-icon" 
            onClick={toggle}
        > 
            <svg height="5vh" width="5vw" id="hamburger" viewBox="5 5 30 30">
                <line
                    stroke="var(--color-highlight-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    x1="0" y1="25"
                    x2="30" y2="25"
                />
                <line
                    stroke="var(--color-highlight-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    x1="0" y1="17.5"
                    x2="30" y2="17.5"
                />
                <line
                    stroke="var(--color-highlight-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    x1="0" y1="10"
                    x2="30" y2="10"
                />
            </svg>
        </button>
    );
}