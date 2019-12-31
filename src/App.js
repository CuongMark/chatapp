import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Router";
import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
        <Navbar>
            <Navbar.Brand>
                <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/alert">Alert</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/alertDismissible">Alert Dismissible</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/flatButton">Flat Button</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/layout">Layout</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/cards">Cards</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/listGroup">List Group</Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/modal">Modal</Link>
            </Navbar.Brand>
        </Navbar>
        <Routes/>
    </div>
  );
}

export default App;
