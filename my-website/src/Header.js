import React from "react";
import "./Header.css";

function Header(comps) {

    return (
        <div className="header">
            <p className="message">{comps.message}</p>
        </div>
    )

}

export default Header