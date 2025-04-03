import React from "react";
import "./video.css";
import vidio1 from "../../images/gym-video.mp4";
function Video() {
    return (
        <div id="home" className="video position-relative">
            <video src={vidio1} autoPlay muted loop />
            <div className="cont position-absolute top-50 start-50 translate-middle">
                <h6 className="mb-5">work harder, get stronger</h6>
                <h1>
                    EASY WITH OUER <span>GYM</span>
                </h1>
                <center>
                    <button className="main-button mx-auto mt-4">
                        BECOME AMEMBAR
                    </button>
                </center>
            </div>
        </div>
    );
}
export default Video;
