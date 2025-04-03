import React from "react";
import "./contact.css";
function Contact() {
    return (
        <div id="CONTACT" className="contact mt-5 ">
            <div className=" row">
                <div className="container col-12 col-lg-6">
                    <div className="map">
                        <iframe
                            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="600px"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="contact-us pb-5 pt-5 col-12 col-lg-6">
                    <div className="container">
                        <form className="p-3 pt-5">
                            <input
                                className="pt-3 pb-3 ps-3 pe-3 mb-4"
                                type="text"
                                placeholder="YOUR NAME*"
                            />
                            <input
                                className="pt-3 pb-3 ps-3 pe-3 mb-4"
                                type="text"
                                placeholder="YOUR EMAIL*"
                            />
                            <input
                                className="pt-3 pb-3 ps-3 pe-3 mb-4"
                                type="text"
                                placeholder="subject"
                            />
                            <textarea
                                placeholder="MESAGE"
                                className="pt-3 pb-3 ps-3 pe-3 mb-4"
                            ></textarea>
                            <input
                                type="submit"
                                value="SEND MESSAGE"
                                className="main-button border-0 mb-5"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
