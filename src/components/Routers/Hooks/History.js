import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function HomeButton() {
    let history = useHistory();
    let match = useRouteMatch("/");

    function handleClick() {
        history.push("/home");
    }

    if (match) {
        return (
            <button type="button" disabled>
                Go home
            </button>
        );
    } else {
        return (
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        );
    }
}