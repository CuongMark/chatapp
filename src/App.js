import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Router";
import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
        <Navbar>
            <Navbar.Brand>
                <NavLink to="/" exact>Scratch</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/alert">Alert</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/alertDismissible">Alert Dismissible</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/flatButton">Flat Button</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/layout">Layout</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/cards">Cards</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/listGroup">List Group</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/modal">Modal</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/chat">Chat</NavLink>
            </Navbar.Brand>
        </Navbar>
        <Routes/>
    </div>
  );
}

export default App;
