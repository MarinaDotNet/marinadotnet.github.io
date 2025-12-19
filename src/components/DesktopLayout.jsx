import NavBar from "./jointLayoutComponents/NavBar";
import DecorativeTopComponent from "./desktopLayoutComponents/DecorativeTopComponent";
import PageContentLeftSide from "./desktopLayoutComponents/PageContentLeftSide";
import PageContentRightSide from "./desktopLayoutComponents/PageContentRightSide";
import DecorativeTopPageLine from "./desktopLayoutComponents/DecorativeTopPageLine";
import DeveloperPowerShell from "./jointLayoutComponents/DeveloperPowerShell";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Transition from "./pages/Transition";

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
                        <DecorativeTopPageLine />
                        <div className="component-box">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/skills" element={<Skills />} />
                                <Route path="/aboutme" element={<Aboutme />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/transition" element={<Transition />} />
                            </Routes> 
                        </div>
                    </div>
                    <PageContentRightSide />
                </div>
                <DeveloperPowerShell />
            </div>        
        </Router>
    );
}