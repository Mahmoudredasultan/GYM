import React, { useState, useEffect } from "react";
import "./navbar.css";
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [active, setActive] = useState(["active", "", "", "", ""]);
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset !== 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        return () => {
            window.onscroll = null;
        };
    }, []);
    return (
        <div className={`nav ${scrolled ? "scrolled" : "no-scrolled"}`}>
            <div className="container d-flex justify-content-between align-items-center">
                <h2>
                    TRANING <span>STUDUE</span>
                </h2>
                <div
                    className={`right-content d-flex justify-content-between align-items-center ${
                        clicked ? "top" : null
                    }`}
                >
                    <div className="list d-flex justify-content-between align-items-center">
                        <a href="#home">
                            <p className={`fs-5 me-3 ${active[0]}`}>HOME</p>
                        </a>
                        <a href="#ABOUT">
                            <p
                                onClick={() => {
                                    setActive(["", "active", "", "", ""]);
                                }}
                                className={`fs-5 me-3 ${active[1]}`}
                            >
                                ABOUT
                            </p>
                        </a>
                        <a href="#CLASSES">
                            <p
                                onClick={() => {
                                    setActive(["", "", "active", "", ""]);
                                }}
                                className={`fs-5 me-3 ${active[2]}`}
                            >
                                CLASSES
                            </p>
                        </a>
                        <a href="#SHEDOULES">
                            <p
                                onClick={() => {
                                    setActive(["", "", "", "active", ""]);
                                }}
                                className={`fs-5 me-3 ${active[3]}`}
                            >
                                SHEDOULES
                            </p>
                        </a>
                        <a href="#CONTACT">
                            <p
                                onClick={() => {
                                    setActive(["", "", "", "", "active"]);
                                }}
                                className={`fs-5 me-3 ${active[4]}`}
                            >
                                CONTACT
                            </p>
                        </a>
                    </div>
                    <button className="border-0 fs-4 pt-3 pb-3 ps-4 pe-4 d-flex align-items-center justify-content-center">
                        SIGHN UP
                    </button>
                </div>
                <div
                    onClick={() => {
                        clicked ? setClicked(false) : setClicked(true);
                    }}
                    className="icon"
                >
                    <div
                        className={`i i1 main-bg ${
                            clicked ? "clicked1" : null
                        }`}
                    ></div>
                    <div
                        className={`i i2 main-bg ${
                            clicked ? "clicked2" : null
                        }`}
                    ></div>
                    <div
                        className={`i i3 main-bg ${
                            clicked ? "clicked3" : null
                        }`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
