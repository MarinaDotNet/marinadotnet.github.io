import {createSiteTour} from "../SiteTour";
import Logo from "../../assets/logo_smallest.svg?react";

/**
 * 
 * @returns 
 * Simulation of UI for main menu and toolbar of Visual Studio for large screens.
 * Currently only for decoration purposses.
 */
export default function DecorativeTopComponents(){

    const tour = createSiteTour();

    const startTour = () => {
        tour.drive();
    };

    return(
        <div className="vs-toolbar-wrapper">
            
            <div className="vs-toolbar-line">
                <Logo width={16} height={16}/>
                <button type="button" className="btn-muted">File</button>
                <button type="button" className="btn-muted">Edit</button>
                <button type="button" className="btn-muted">View</button>
                <button type="button" className="btn-muted">Git</button>
                <button type="button" className="btn-muted">Projects</button>
                <button type="button" className="btn-muted">Build</button>
                <button type="button" className="btn-muted">Debag</button>
                <button type="button" className="btn-muted">Test</button>
                <button type="button" className="btn-muted">Analyze</button>
                <button type="button" className="btn-muted">Extensions</button>
                <button type="button" className="btn-muted">Window</button>
                <button type="button" className="btn-muted">Help</button>

                <button type="button" 
                className="btn-muted"
                style={{marginLeft: "5px"}}
                >Search ▾</button>

                <span className="text-bold-sm">NetByMarina.Portfolio</span>

                <button 
                type="button" 
                className="btn-muted"
                style={{marginLeft: "auto"}}>Sign in</button>
                
            </div>
            <div className="vs-toolbar-line">
                <div className="icon-button-row">
                    <div className="icon-button-row-left-side">
                        <div className="divider-vertical divider-double-dotted"></div>
                        {/*Round button Backward*/}
                        <button className="btn-icon btn-icon-round active" title="Backward">←</button>
                        {/*Round button Forward*/}
                        <button className="btn-icon btn-icon-round text-muted" title="Forward">→</button>
                        <div className="divider-vertical divider-single-solid"></div>
                        {/*Button to add new Project*/}
                        <button className="btn-icon btn-icon-dashed text-muted" title="New Project"> ＋ </button>
                        {/*Button to open file*/}
                        <button className="btn-icon btn-icon-solid" title="Open File">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                            </svg>
                        </button>
                        {/*Button to save file*/}
                        <button className="btn-icon btn-icon-solid" title="Save">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17 21 17 13 7 13 7 21"/>
                                <polyline points="7 3 7 8 15 8"/>
                            </svg>                
                        </button>
                        {/*Button to save all*/}
                        <button className="btn-icon-double" title="Save All">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17 21 17 13 7 13 7 21"/>
                                <polyline points="7 3 7 8 15 8"/>
                            </svg> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17 21 17 13 7 13 7 21"/>
                                <polyline points="7 3 7 8 15 8"/>
                            </svg> 
                        </button>
                        <div className="divider-vertical divider-single-solid"></div>
                        {/*Button to Undo */}
                        <button className="btn-icon btn-icon-solid text-muted" title="Undo (Ctrl + Z)">↶▾</button>
                        {/*Button to Redo */}
                        <button className="btn-icon btn-icon-solid text-muted" title="Redo (Ctrl + Y)">↷▾</button>
                        <div className="divider-vertical divider-single-solid"></div>
                        {/*Button Debug */}
                        <button className="btn-icon btn-text-light text-muted" title="Soulution Configurations">Debug ▾</button>
                        {/*Button to choose solution platform */}
                        <button className="btn-icon btn-text-light text-muted" title="Solution Platforms">Any CPU ▾</button>
                        {/*Button to Start */}
                        <button className="btn-icon btn-icon-solid text-light-sm text-muted" title="Start"><span className="text-accent-green">▶</span> Start ▾</button>
                        {/*Button to Start without debuging */}
                        <button className="btn-icon btn-icon-solid" title="Start Without Debugging(Ctrl + F5)">
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.700012 10.3301V1.66992L8.20099 6L0.700012 10.3301Z" fill="var(--color-background)" stroke="var(--color-accent-green)"/>
                            </svg>
                        </button>
                        {/*Button for hot reload */}
                        <button className="btn-icon btn-icon-solid text-muted" title="Hot Reload">☄️▾</button>

                        {/*Button to find in files */}
                        <div className="divider-vertical divider-single-solid"></div>
                        <button className="btn-icon-double text-muted" title="Find in Files (Ctrl + Shift + F">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="var(--color-accent-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9a2 2 0 0 1 2-2h8l2 2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
                                <circle cx="20" cy="10" r="4" />
                                <line x1="22.5" y1="12.5" x2="25" y2="15" />
                            </svg>
                        </button>
                        <div className="divider-vertical divider-single-solid"></div>
                        {/*Button start window */}
                        <button className="btn-icon-double" title="Start Window">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="var(--color-accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="6" width="24" height="18" rx="2" ry="2"/>
                                <line x1="4" y1="12" x2="28" y2="12"/>
                                <circle cx="8" cy="9" r="1"/>
                                <circle cx="12" cy="9" r="1"/>
                                <circle cx="16" cy="9" r="1"/>
                                <path d="M23 17 L19 21 H20.5 V25 H25.5 V21 H27 Z" fill="none"/>
                            </svg>
                        </button>
                        <div className="divider-vertical divider-double-dotted"></div>
                        {/*Button to toggle spell checker */}
                        <button className="btn-abc-check" title="Toggle Spell Checker">
                            <svg viewBox="0 0 16 16" width="100%" height="2.5vh" xmlns="http://www.w3.org/2000/svg">
                                <text x="8" y="5" textAnchor="middle" dominantBaseline="middle" fontFamily="Segoe UI, sans-serif" fontSize="8" fill="var(--color-text-muted)">
                                    abc
                                </text>
                                <path d="M3 10L7 14L13 6" stroke="var(--color-accent-green)" strokeWidth="2" fill="none"/>
                            </svg>
                        </button>
                        <div className="divider-vertical divider-single-solid"></div>
                    </div>

                    <div className="icon-button-row-rightside">
                        <button className="site-tour-button" data-tour="site-tour" title="Press to start Site Tour" type="button" onClick={startTour}> ? Help </button>
                    </div>
                </div>
            </div>
        </div>
    );
}