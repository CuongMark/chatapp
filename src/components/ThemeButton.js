import React, {useContext} from "react";
import ThemeContext from "../Hooks/contexts/ThemeContext";

export default function () {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}