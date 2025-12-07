import NavBar from "./jointLayoutComponents/NavBar";
import DecorativeTopComponent from "./desktopLayoutComponents/DecorativeTopComponent";
import PageContentLeftSide from "./desktopLayoutComponents/PageContentLeftSide";
import PageContentRightSide from "./desktopLayoutComponents/PageContentRightSide";

import Home from "./pages/Home";

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
                        
                        <div className="component-box">
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </div>
                    </div>

                    <PageContentRightSide />

                </div>

                
            </div>

            
            
        </Router>
    );
}