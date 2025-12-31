import NavBar from "./jointLayoutComponents/NavBar";
import DecorativeTopComponentMob from "./mobileLaoyoutComponents/DecorativeTopComponentMob";
import SideBar from './mobileLaoyoutComponents/SideBar';
import DeveloperPowerShell from "./jointLayoutComponents/DeveloperPowerShell";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Transition from "./pages/Transition";

import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";

export default function MobileLayout(){
    const [viewMode, setViewMode] = useState(() => localStorage.getItem("view") ?? "user");

    useEffect(() => {
        localStorage.setItem("view", viewMode);
    }, [viewMode]);

    return(
        <Router>
            <div className="page-layout">
                <DecorativeTopComponentMob viewMode={viewMode} setViewMode={setViewMode}/>
                <div className="page-content">
                    <SideBar />
                    <div className="middle-content">
                        <NavBar />
                        <div className="component-box">
                            <Routes>
                                <Route path="/" element={<Home viewMode={viewMode}/>} />
                                <Route path="/projects" element={<Projects viewMode={viewMode}/>} />
                                <Route path="/skills" element={<Skills viewMode={viewMode}/>} />
                                <Route path="/aboutme" element={<Aboutme viewMode={viewMode}/>} />
                                <Route path="/contact" element={<Contact viewMode={viewMode}/>} />
                                <Route path="#" element={<Home viewMode={viewMode}/>} />
                                <Route path="/transition" element={<Transition />} />
                            </Routes>
                        </div>
                            <DeveloperPowerShell />
                    </div>
                </div>            
            </div>
        </Router>
    );
}