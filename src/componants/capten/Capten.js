import React from "react";
function Capten({ link, title, name, description }) {
    return (
        <div className="capten mb-4 col-12 col-lg-4 p-4">
            <img src={link} alt="" />
            <p className="mt-3 mb-3">{title}</p>
            <h3 className="mb-3">{name}</h3>
            <p className="lh-lg text-black-50">{description}</p>
            <div className="icons">
                <a className="p-1" href="#">
                    <i className="fab fa-facebook" />
                </a>
                <a className="p-1" href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="p-1" href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a className="p-1" href="#">
                    <i className="fab fa-behance"></i>
                </a>
            </div>
        </div>
    );
}
export default Capten;
