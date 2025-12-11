import NavBar from "./jointLayoutComponents/NavBar";
import DecorativeTopComponentMob from "./mobileLaoyoutComponents/DecorativeTopComponentMob";
import SideBar from './mobileLaoyoutComponents/SideBar';
import DeveloperPowerShell from "./jointLayoutComponents/DeveloperPowerShell";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";

import {HashRouter as Router, Routes, Route} from "react-router-dom";

export default function MobileLayout(){
    return(
        <Router>
            <div className="page-layout">
                <DecorativeTopComponentMob />
                <div className="page-content">
                    <SideBar />
                    <div className="middle-content">
                        <NavBar />
                        <div className="component-box">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/skills" element={<Skills />} />
                                <Route path="/aboutme" element={<Aboutme />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="#" element={<Home />} />
                            </Routes>
                        </div>
                            <DeveloperPowerShell />
                    </div>
                </div>            
            </div>
        </Router>
    );
}