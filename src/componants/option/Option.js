import React from "react";
import image from "../../images/features-first-icon.png"
function Option({ title, discription, link }) {
    return (
        <div className="option d-flex justify-content-between col-lg-6 mb-5">
            <img
                className="me-3"
                src={image}
                alt=""
            />
            <div className="cont">
                <h3 className="mb-2">{title}</h3>
                <p className="mb-2 lh-lg text-black-50">{discription}</p>
                <a href="#">{link}</a>
            </div>
        </div>
    );
}
export default Option;
