import React from "react";
import "./Thumbnail.css";

function Thumbnail(comps) {
    return (
        <div className='thumbnail'>
            <h4 className='build_name'>{comps.build_name}</h4>
        </div>
    )
}

export default Thumbnail