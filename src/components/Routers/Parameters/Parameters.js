import React from "react";
import { useParams } from "react-router-dom"

export default function () {
    let {id} = useParams();
    return (
        <h3>Id: {id}</h3>
    )
}