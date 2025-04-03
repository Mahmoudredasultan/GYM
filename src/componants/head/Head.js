import React from "react";
import image from "../../images/line-dec.png"
function Head({title,supTitle,description}) {
    return (
        <div className="head">
            <h1 className="mb-3">
                {title} <span>{supTitle}</span>
            </h1>
            <img className="mb-3" src={image} alt="" />
            <p className="mb-5 mx-auto">
                {description}
            </p>
        </div>
    );
}
export default Head;
