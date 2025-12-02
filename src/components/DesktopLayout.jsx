import NavBar from "./jointLayoutComponents/NavBar";


import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function DesktopLayout(){
    return(
        <Router>
        
            <NavBar />
            <h1>This is layout for Desktop</h1>
            <p>Will be added later.</p>
            
        </Router>
    );
}