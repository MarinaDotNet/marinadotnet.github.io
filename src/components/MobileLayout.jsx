import NavBar from "./jointLayoutComponents/NavBar";
import DecorativeTopComponentMob from "./mobileLaoyoutComponents/DecorativeTopComponentMob";

import {HashRouter as Router, Routes, Route} from "react-router-dom";

export default function MobileLayout(){
    return(
        <Router>
            <div className="page-layout">

                <DecorativeTopComponentMob />

                <NavBar />
                <h1>This is layout for Mobile</h1>
                <p>Will be added later.</p>
            </div>
            
        </Router>
    );
}