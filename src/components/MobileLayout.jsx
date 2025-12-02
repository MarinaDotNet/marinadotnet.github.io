import NavBar from "./jointLayoutComponents/NavBar";

import {HashRouter as Router, Routes, Route} from "react-router-dom";


export default function MobileLayout(){
    return(
        <Router>
            <NavBar />
            <h1>This is layout for Mobile</h1>
            <p>Will be added later.</p>
        </Router>
    );
}