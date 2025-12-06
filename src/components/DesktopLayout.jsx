import NavBar from "./jointLayoutComponents/NavBar";
import DecorativeTopComponent from "./desktopLayoutComponents/DecorativeTopComponent";
import PageContentLeftSide from "./desktopLayoutComponents/PageContentLeftSide";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function DesktopLayout(){
    return(
        <Router>

            <div className="page-layout">
                
                <DecorativeTopComponent />

                <div className="main-content">

                    <PageContentLeftSide />

                    <div className="middle-content">
                        <NavBar />
                        <h1>This is layout for Desktop</h1>
                        <p>Will be added later.</p>
                    </div>
                </div>

                
            </div>

            
            
        </Router>
    );
}