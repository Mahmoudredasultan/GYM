import React from "react";
import Option from "../option/Option.js";
import Head from "../head/Head.js";
import "./program.css";
function Program() {
    return (
        <div id="ABOUT" className="program mt-5 text-center pb-5">
            <div className="container">
                <Head title={"CHOSE"} supTitle={"PROGRAM"} description={"Training Studio is free CSS template for gyms and fitnesscenters. You are allowed to use this layout for your businesswebsite."}/>
                <div className="body">
                    <div className="options text-start row">
                        <Option
                            title={"Basic Fitness"}
                            discription={
                                "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
                            }
                            link={"DISCOVER MORE"}
                        />
                        <Option
                            title={"Basic Fitness"}
                            discription={
                                "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
                            }
                            link={"DISCOVER MORE"}
                        />
                        <Option
                            title={"Basic Fitness"}
                            discription={
                                "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
                            }
                            link={"DISCOVER MORE"}
                        />
                        <Option
                            title={"Basic Fitness"}
                            discription={
                                "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
                            }
                            link={"DISCOVER MORE"}
                        />
                        <Option
                            title={"Basic Fitness"}
                            discription={
                                "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
                            }
                            link={"DISCOVER MORE"}
                        />
                        <Option
                            title={"Basic Fitness"}
                            discription={
                                "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
                            }
                            link={"DISCOVER MORE"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Program;
