import React, {useState} from "react";

/**
 * 
 * @returns simulation of UI for Properties in Visual Studio for large screens.
*/
export default function PageContentRightSide(){

    /**
     * 
     * @param {boolean} isOpen indicates the current state of the accordion expanded or not.
     * @returns {JSX.Element} SVG element representing the open or close state of the accordion.
     */
    function AccordionExpandIcon(isOpen){
        return isOpen
        ? (
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="1.41917" width="11" height="10.9723" fill="var(--color-frame)" stroke="var(--color-text-neutral)"/>
                    <line x1="3" y1="6.4053" x2="9" y2="6.4053" stroke="var(--color-text-bright)"/>
                </svg>
            )
        : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="11" height="10.9723" fill="var(--color-frame)" stroke="var(--color-text-neutral)"/>
                    <line x1="3" y1="5.48614" x2="9" y2="5.48614" stroke="var(--color-text-bright)"/>
                    <line x1="6" y1="8.5" x2="6" y2="2.5" stroke="var(--color-text-bright)"/>
                </svg>
            );
    };

     /**
     * Accordion component that can be expaned or collapse to shown/hide content.
     * 
     * @param {string} title - the title displayed on the accordion header.
     * @param {JSX.Element} children - the content shown when the accordion is expanded.
     * @param {boolean} status - initial open/closed state of the accordion.
     * @returns {JSX.Element} accordion UI component.
     */
    function Accordion({title, children, status}){
        const [isOpen, setIsOpen] = useState(status);

        return(
            <div className="accordion-container"> {/**v2-accordion-container */}
                <button className="v2-accordion-header-btn" onClick={() => setIsOpen(!isOpen)}>
                    <span >{AccordionExpandIcon(isOpen)}</span>
                    {title}
                </button>
                {isOpen && <div className="v2-accordion-panel">{children}</div>} {/** */}
            </div>
        );
    };

    return(
        <div className="panel-sidebar-right">
            <div className="sidebar-object-header"> {/**properties-windows-header */}
                <span className="text-title-sm">Properties</span>
                {/**Dotted triple horizontal line*/}
                <div className="divider-expandable">
                    {/* divider-expandable end */}
                </div>

                <div className="window-controls"> {/**properties-windows-controls */}
                     <button className="btn-icon-window icon-controls" title="immitation of button">{ /**btn-icon-server  icon-server*/}
                        {/* down arrow */}
                        <svg viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.91713 8.55482L0.42433 0.174181H11.4099L5.91713 8.55482Z" fill="var(--color-text-primary)" />
                        </svg>
                    </button>

                    <button className="btn-icon-window icon-controls" title="immitation of button"> { /**btn-icon-server  icon-server*/}
                        {/* square and line */}
                        <svg viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6.9834" y="0.174164" width="9.06077" height="5.5871" fill="var(--color-text-primary)" />
                        <line x1="6.9834" y1="3.46773" x2="0.187819" y2="3.46773" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>

                    <button className="btn-icon-window icon-controls" title="immitation of button"> { /**btn-icon-server icon-server */}
                        {/* X icon */}
                        <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="15.4324" y2="-0.5" transform="matrix(0.689722 -0.724074 0.804166 0.594405 1.91307 12.5548)" stroke="var(--color-text-primary)" />
                        <line y1="-0.5" x2="15.7742" y2="-0.5" transform="matrix(0.804166 0.594405 -0.689722 0.724074 0.972366 2.37035)" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>
                {/**window-controls end */}
                </div>
            {/**sidebar-object-header end */}
            </div>

            <div>
                <Accordion title="Social Media Links" status={true}>
                    <ul className="accordion-list-prop"> {/**v2-accordion-list */}
                        <li><a href="https://github.com/MarinaDotNet" title="Visit my GitHub page">Visit me at GitHub</a></li>
                        <hr className="line" />
                        <li><a href="https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au" title="Visit my LinkedIn page">Visit me at LinkedIn</a></li>
                        <hr className="line"/>
                        <li><a href="mailto:msichova@outlook.com" title="Send to me email">Contact me via Email</a></li>
                        <hr className="line"/>
                        <li><a href="https://wa.me/+61433881789" title="Contact Me via WhatsUp">Contact me at WhatsUp</a></li>
                        <hr className="line"/>
                        <li><a href="https://www.facebook.com/msichova/" title="Contact to me via Facebook">Contact me at Facebook</a></li>
                        <hr className="line"/>
                    </ul>
                </Accordion>
                <Accordion title="Download My Resume" status={true}>
                    <ul className="accordion-list-prop"> {/**v2-accordion-list */}
                        <li><a href="javascript:void(0)">In PDF format</a></li>
                        <hr className="line" />
                        <li><a href="javascript:void(0)">In DOC format</a></li>
                        <hr className="line"/>
                        <li><a href="javascript:void(0)"> In PNG format</a></li>
                        <hr className="line"/>
                    </ul>
                </Accordion>
            </div>
        {/**panel-sidebar-right end */}
        </div>
    );
}