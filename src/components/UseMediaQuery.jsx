import {useEffect, useState} from 'react';
/*
* Hook that checks if the viewport matches a given width and height
*
* @param {number} breakPointWidth - maximum viewport width to consider mobile device
* @param {number} breakPointHeight - maximum viewport height to consider mobile device
* @returns {boolean} - true if the viewport matches one of the break points conditions
*/
export default function UseMediaQuery(breakPointWidth = 601, breakPointHeight = 500){
    //consist media query string based on provided width and height
    const query = `(max-width: ${breakPointWidth}px), (max-height: ${breakPointHeight}px)`;

    //initial check, insures that window exists
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined'
        ? window.matchMedia(query).matches
        : false);

    //listens for screen size changes and updates `isMobile` accordingly
    useEffect(() => {
        if(typeof window === 'undefined'){
            return;
        }

        const mediaQueryList = window.matchMedia(query);

        const handleChange = (event) => setIsMobile(event.matches);

        //initial sync
        setIsMobile(mediaQueryList.matches);

        //subscribe the viewport size changes
        mediaQueryList.addEventListener('change', handleChange);

        //clean up the listener on unmount
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    return isMobile;
}