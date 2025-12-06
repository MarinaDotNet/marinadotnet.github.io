import React, {useState} from "react";

/**
 * 
 * @returns simulation of UI for SQL Server Explorer in Visual Studio for large screens.
*/

export default function PageContentLeftSide(){

    /**
     * Renders a chevron icon indecating open/close state of the accordion.
     * 
     * @param {boolean} isOpen indecates if the accordion is currently expanded.
     * @returns {JSX.Element} SVG element representing the open or closed state.
     */
    function AccordionChevronIcon(isOpen){
        return isOpen 
        ? (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50353 7.55605L9.31851 0.00112558L0.805638 5.70493L8.50353 7.55605Z" fill="var(--color-text-primary)"/>
            </svg>)
        : (
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.48738L0.5 9.30378L5.2168 5.39558L0.5 1.48738Z" fill="var(--color-background)" stroke="var(--color-text-primary)"/>
            </svg>);
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
            <div className="accordion-container">
                <button className="accordion-header-btn" onClick={() => setIsOpen(!isOpen)}>
                    <span>{AccordionChevronIcon(isOpen)}</span>
                    {title}
                </button>
                {isOpen && <div className="accordion-panel">{children}</div>}
            </div>
        );
    };

    return(
        <div className="panel-sidebar"> {/*panel-sidebar-left */}
            <div className="sidebar-object-header"> {/* server-object-header */ }
                <span className="text-title-sm">SQL Server Object Explorer</span>

                {/**Dotted triple horizontal line*/}
                <div className="divider-expandable">
                    {/* divider-expandable end */}
                </div>

                {/** Container for window control buttons */}
                <div className="window-controls"> {/**server-object-controls */}

                    <button className="btn-icon-window icon-controls">{ /**btn-icon-server  icon-server*/}
                        {/* down arrow */}
                        <svg viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.91713 8.55482L0.42433 0.174181H11.4099L5.91713 8.55482Z" fill="var(--color-text-primary)" />
                        </svg>
                    </button>

                    <button className="btn-icon-window icon-controls"> { /**btn-icon-server  icon-server*/}
                        {/* square and line */}
                        <svg viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6.9834" y="0.174164" width="9.06077" height="5.5871" fill="var(--color-text-primary)" />
                        <line x1="6.9834" y1="3.46773" x2="0.187819" y2="3.46773" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>

                    <button className="btn-icon-window icon-controls"> { /**btn-icon-server icon-server */}
                        {/* X icon */}
                        <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="15.4324" y2="-0.5" transform="matrix(0.689722 -0.724074 0.804166 0.594405 1.91307 12.5548)" stroke="var(--color-text-primary)" />
                        <line y1="-0.5" x2="15.7742" y2="-0.5" transform="matrix(0.804166 0.594405 -0.689722 0.724074 0.972366 2.37035)" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>
                {/** end of Container for window control buttons div */}
                </div>
            {/** end of sidebar-object-header div*/} 
            </div> 

            <div>
                <Accordion title={
                    <span className="accordion-icon-group">
                        {/* SQL server icon */}
                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.23785 5.80585C8.09883 5.80585 8.85424 5.99277 9.37555 6.26971C9.91801 6.55803 10.0921 6.87074 10.0923 7.0871C10.0923 7.30348 9.91842 7.61692 9.37555 7.90546C8.85424 8.1824 8.09883 8.36932 7.23785 8.36932C6.37702 8.36928 5.62237 8.18236 5.10114 7.90546C4.55808 7.61689 4.38434 7.30351 4.38434 7.0871C4.3846 6.8707 4.55849 6.55807 5.10114 6.26971C5.62237 5.99281 6.37702 5.8059 7.23785 5.80585Z" fill="var(--color-text-primary)" stroke="var(--color-text-primary)"/>
                            <rect x="3.88434" y="2.58086" width="6.70771" height="4.61155" fill="var(--color-text-primary)"/>
                            <path d="M7.23785 1.19431C8.09883 1.19431 8.85424 1.38123 9.37555 1.65817C9.91801 1.94649 10.0921 2.25919 10.0923 2.47556C10.0923 2.69193 9.91842 3.00538 9.37555 3.29391C8.85424 3.57086 8.09883 3.75778 7.23785 3.75778C6.37702 3.75773 5.62237 3.57082 5.10114 3.29391C4.55808 3.00535 4.38434 2.69197 4.38434 2.47556C4.3846 2.25916 4.55849 1.94652 5.10114 1.65817C5.62237 1.38126 6.37702 1.19435 7.23785 1.19431Z" fill="var(--color-background)" stroke="var(--color-text-primary)"/>
                            <path d="M3.88403 9.36932C4.74501 9.36932 5.50042 9.55625 6.02173 9.83319C6.56419 10.1215 6.73827 10.4342 6.73853 10.6506C6.73853 10.867 6.5646 11.1804 6.02173 11.4689C5.50042 11.7459 4.74501 11.9328 3.88403 11.9328C3.02319 11.9328 2.26855 11.7458 1.74731 11.4689C1.20426 11.1804 1.03052 10.867 1.03052 10.6506C1.03078 10.4342 1.20467 10.1215 1.74731 9.83319C2.26855 9.55628 3.02319 9.36937 3.88403 9.36932Z" fill="var(--color-text-primary)" stroke="var(--color-text-primary)"/>
                            <rect x="0.530518" y="6.14432" width="6.70771" height="4.61155" fill="var(--color-text-primary)"/>
                            <path d="M3.88403 4.75778C4.74501 4.75778 5.50042 4.9447 6.02173 5.22165C6.56419 5.50997 6.73827 5.82267 6.73853 6.03903C6.73853 6.25541 6.5646 6.56886 6.02173 6.85739C5.50042 7.13434 4.74501 7.32126 3.88403 7.32126C3.02319 7.32121 2.26855 7.1343 1.74731 6.85739C1.20426 6.56882 1.03052 6.25544 1.03052 6.03903C1.03078 5.82264 1.20467 5.51 1.74731 5.22165C2.26855 4.94474 3.02319 4.75783 3.88403 4.75778Z" fill="var(--color-background)" stroke="var(--color-text-primary)"/>
                        </svg>
                        SQL Server
                    </span>
                } status={true}>

                    {/**localdb accordion */}
                    <Accordion title={
                        <span className="accordion-icon-group">
                            {/* localdb icon */}
                                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.530518" y="0.335632" width="10.0616" height="3.35385" rx="1.67693" fill="var(--color-text-primary)"/>
                                    <rect x="0.530518" y="4.52795" width="10.0616" height="3.35385" rx="1.67693" fill="var(--color-text-primary)"/>
                                    <rect x="0.530518" y="8.72026" width="10.0616" height="3.35385" rx="1.67693" fill="var(--color-text-primary)"/>
                                    <ellipse cx="7.65741" cy="2.01257" rx="1.25769" ry="0.838463" fill="var(--color-background)"/>
                                    <ellipse cx="7.65741" cy="6.20488" rx="1.25769" ry="0.838463" fill="var(--color-background)"/>
                                    <ellipse cx="7.65741" cy="10.3972" rx="1.25769" ry="0.838463" fill="var(--color-background)"/>
                                </svg>
                                (localdb)\MarinaDotNet\Portfolio
                        </span>
                    } status={true}>

                        {/**Databses accordion start */}
                        <Accordion title={
                            <span className="accordion-icon-group">
                                📂Databases
                            </span>
                        } status={true}>
                            {/**Portfolio accordion start */}
                            <Accordion title={
                                <span className="accordion-icon-group">
                                    {/* PortfolioDB icon */}
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.34116 7.53825C6.60567 7.53825 7.7262 7.81128 8.51205 8.22868C9.31987 8.65783 9.65756 9.16593 9.65756 9.59684C9.65745 10.0277 9.31974 10.5349 8.51205 10.964C7.72619 11.3815 6.60579 11.6554 5.34116 11.6554C4.07677 11.6554 2.95701 11.3814 2.17123 10.964C1.36355 10.5349 1.02583 10.0277 1.02573 9.59684C1.02573 9.16593 1.36342 8.65783 2.17123 8.22868C2.957 7.81138 4.0769 7.5383 5.34116 7.53825Z" fill="var(--color-text-primary)" stroke="var(--color-text-primary)"/>
                                        <rect x="0.525726" y="3.12542" width="9.63158" height="6.62171" fill="var(--color-text-primary)"/>
                                        <path d="M5.34116 0.916534C6.60567 0.916534 7.7262 1.18957 8.51205 1.60696C9.31987 2.03612 9.65756 2.54422 9.65756 2.97513C9.65745 3.40599 9.31974 3.91323 8.51205 4.34232C7.72619 4.75978 6.60579 5.03372 5.34116 5.03372C4.07677 5.03367 2.95701 4.75968 2.17123 4.34232C1.36355 3.91323 1.02583 3.40599 1.02573 2.97513C1.02573 2.54422 1.36342 2.03612 2.17123 1.60696C2.957 1.18967 4.0769 0.916587 5.34116 0.916534Z" fill="var(--color-background)" stroke="var(--color-text-primary)"/>
                                    </svg>
                                    PortfolioDB
                                </span>
                            } status={true}>
                                {/**Tables accordion start */}
                                <Accordion title={
                                    <span className="accordion-icon-group">
                                        📂Tables
                                    </span>
                                } status={true}>
                                    {/**dbo.Home accordion start */}
                                    <Accordion title={
                                        <span className="accordion-icon-group">
                                            ▦dbo.Home
                                        </span>
                                    } status={false}>
                                        <ul className="accordion-list-db">{/**accordion-list*/}
                                            <li>Welcome</li>
                                            <li>Some basic information</li>
                                        </ul>   
                                    {/**dbo.Home accordion end */}
                                    </Accordion>
                                    {/**dbo.Projects accordion start */}
                                    <Accordion title={
                                        <span className="accordion-icon-group">
                                            ▦dbo.Projects
                                        </span>
                                    } status={false}>
                                        <span className="accordion-icon-group">
                                            <ul className="accordion-list-db">
                                                <li title="Backend APIs built with ASP.NET Core">API Projects</li>
                                                <li title="Modern websites and single-page applications built with HTML, CSS, JavaScript, or React">Web Applications</li>
                                                <li title="Desktop applications created using Windows Forms and .NET technologies">Windows Forms Applications</li>
                                                <li title="Showcase of personal work, skills, and development experience in a curated format">Portfolios</li>
                                                <li title="Various other software projects that don't fit in the above categories">Other Applications</li>                   
                                            </ul>
                                    </span>
                                    {/**dbo.Projects accordion end */}
                                    </Accordion>
                                    {/* dbo.Skills Accordion start */}
                                    <Accordion title={
                                        <span className="accordion-icon-group">
                                            ▦dbo.Skills
                                        </span>
                                        } status={false}>
                                        <ul className="accordion-list-db">
                                            <li>Languages && Frameworks</li>
                                            <li>Databases</li>
                                            <li>Tools && Technologies</li>
                                            <li>Currently Learning</li>
                                        </ul>
                                    {/* dbo.Skills Accordion end */}
                                    </Accordion>
                                    {/* dbo.AboutMe Accordion start */}
                                    <Accordion title={
                                        <span className="accordion-icon-group">
                                            ▦dbo.AboutMe
                                        </span>
                                    } status={false}>
                                        <ul className="accordion-list-db">
                                            <li>Introduction</li>
                                            <li>My Juirney</li>
                                            <li>Interests</li>
                                        </ul>
                                    {/* dbo.AboutMe Accordion end */}
                                    </Accordion>
                                    {/* dbo.Contacts Accordion start */}
                                    <Accordion title={
                                        <span className="accordion-icon-group">
                                            ▦dbo.Contacts
                                        </span>
                                    } status={false}>
                                        <ul className="accordion-list-db">
                                            <li>Email</li>
                                            <li>GitHub</li>
                                            <li>LinkedIn</li>
                                            <li>WhatsUp</li>
                                            <li>Facebook</li>
                                        </ul>
                                    {/* dbo.Contacts Accordion end */}
                                    </Accordion>
                                {/**Tables accordion end */}
                                </Accordion>
                            {/**Portfolio accordion end */}
                            </Accordion>
                        {/**Databases accordion end */}
                        </Accordion>
                    {/** localdb end */}
                    </Accordion>
                {/* SQL server Accordion end */} 
                </Accordion>
            </div>
        {/**end of panel-sidebar div */}
        </div>
    );
}