import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Router";
import './App.css';

function App() {
  return (
    <div className="App container">
        <Navbar>
            <Navbar.Brand>
                <Link to="/">Scratch</Link>
            </Navbar.Brand>
        </Navbar>
        <Routes/>
    </div>
  );
}

export default App;
