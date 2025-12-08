import {useEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * ScrollToHash
 * 
 * React component that enables smooth scrolling to an anchor on the page
 * when the URL contains a hash (e.g. `#contact`, `#skills`).
 * 
 * Dependencies:
 * - react
 * - react-router-dom
 * 
 * @returns {null} This component does not render anything to the UI.
 */
export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if(location.hash){
            const element = document.getElementById(location.hash.slice(1));

            if(element){
                element.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [location]);

    return null;
};