import React from "react";

import logo from "../assets/generated-image.png"

export default function Header() {
    return (
        <header className="Mainheader">
            <img className="mainLogo" src={logo}/>
            <h1>Budget Bee</h1>
        </header>
    )
}
