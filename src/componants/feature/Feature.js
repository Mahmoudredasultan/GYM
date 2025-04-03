import React from "react";
import image from "../../images/tabs-first-icon.png"
function Feature({
    description,
    setDescription,
    setLink,
    setTitle,
    newDescription,
    newLink
}) {
    return (
        <div
            className="cont d-flex align-items-center mb-4 w-100"
            onClick={() => {
                setDescription(newDescription);
                setTitle(description);
                setLink(newLink);
            }}
        >
            <img
                className="me-3"
                src={image}
                alt=""
            />
            <p>{description}</p>
        </div>
    );
}
export default Feature;
