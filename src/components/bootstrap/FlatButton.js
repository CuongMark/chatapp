import React from "react";
import Button from "react-bootstrap/Button";

export default function () {
    return (
        <>
            <style type="text/css">
                {`
                .btn-flat {
                  background-color: purple;
                  color: white;
                }
            
                .btn-xxl {
                  padding: 1rem 1.5rem;
                  font-size: 3.5rem;
                }
                `}
            </style>

            <Button variant="flat" size="xxl">
                flat button
            </Button>
        </>
    )
}