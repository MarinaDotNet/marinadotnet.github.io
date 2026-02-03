import {Link, useLocation} from 'react-router-dom';
import {useState} from 'react';
import ColapsedNavBar from '../mobileLaoyoutComponents/ColapsedNavBar';

/** 
 * NavBar component
 * 
 * A responsive navigation bar that supports active route highlighting
 * and collapses into mobile layout when views on smaller viewports
*/
export default function NavBar({isMobile}){
    //Get current URL to determine which navigation button is active
    const { pathname } = useLocation();
    const page = pathname === "/" ? "home" : pathname.replace("/", "");

    //Controls the visibility of the mobile dropdown navigation bar
    const [isOpen, setIsOpen] = useState(false);

    //Toggles the navigation bar open/closed
    const toggleMenu = () => setIsOpen(prev => !prev);

    //Closes the navigation bar when user clicks a navigation button
    const closeMenu = () => setIsOpen(false);

    return(
        <div className="nav-bar" data-tour="site-navbar">

            {/**Navigation button container; expands when isOpen = true */}
            <div 
                id="nav-buttons" 
                className={`navigate-buttons ${isOpen ? "responsive" : ""}`}
            >
                <Link to="/" className="responsive-nav-button" onClick={closeMenu}>
                <button className={page === "home" ? "active" : ""}>Home.cs</button>
                </Link>
                <Link to="/projects" className="responsive-nav-button" onClick={closeMenu}>
                <button className={page === "projects" ? "active" : ""}>Projects.cs</button>
                </Link>
                <Link to="/skills" className="responsive-nav-button" onClick={closeMenu}>
                <button className={page === "skills" ? "active" : ""}>Skills.cs</button>
                </Link>
                <Link to="/aboutme" className="responsive-nav-button" onClick={closeMenu}>
                <button className={page === "aboutme" ? "active" : ""}>About_Me.cs</button>
                </Link>
                <Link to="/contact" className="responsive-nav-button" onClick={closeMenu}>
                <button className={page === "contact" ? "active" : ""}>Contact.cs</button>
                </Link>
            </div>

            {/**Humburger icon for toggling the mobile navigation bar */}
            <ColapsedNavBar toggle={toggleMenu} isMobile={isMobile}/>
        </div>
    );
}