import React from "react";
import './Home.css';
import History from "../../components/Routers/Hooks/History";

export default function Home() {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Scratch</h1>
                <p>A simple not taking app</p>
            </div>
            <History/>
        </div>
    )
}