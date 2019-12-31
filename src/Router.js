import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Example from "./Example";
import AlertDismissible from "./containers/AlertDismissible";
import FlatButton from "./components/bootstrap/FlatButton";
import Layout from "./components/bootstrap/Layout/Layout";
import Cards from "./components/bootstrap/Cards/Cards";
import ListGroup from "./components/bootstrap/listGroup/ListGroup";
import Modal from "./components/bootstrap/Modal/Modal"

export default function Routes() {
    return (
        <Switch>
            <Route path="/alert" exact component={Example} />
            <Route path="/alertDismissible" exact component={AlertDismissible} />
            <Route path="/flatButton" exact component={FlatButton} />
            <Route path="/layout" exact component={Layout} />
            <Route path="/cards" exact component={Cards} />
            <Route path="/listGroup" exact component={ListGroup} />
            <Route path="/modal" exact component={Modal} />
            <Route path="/" exact component={Home} />
        </Switch>
    )
}