import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Example() {
    return (
        <Alert dismissible variant={"danger"}>
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>change this and try again.</p>
        </Alert>
    )

}