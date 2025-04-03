import React, { useState } from "react";
import Head from "../head/Head.js";
import Feature from "../feature/Feature.js";
import image1 from "../../images/training-image-01.jpg";
import image2 from "../../images/training-image-02.jpg";
import image3 from "../../images/training-image-03.jpg";
import image4 from "../../images/training-image-04.jpg"
import "./features.css";
function Features() {
    const [link, setLink] = useState(image1);
    const [title, setTitle] = useState("First Training Class");
    const [description, setDescription] = useState(
        "Phasellus convallis mauris sed elementum vulputate.Donec posuere leo sed dui eleifend hendrerit. Sedsuscipit suscipit erat, sed vehicula ligula. Aliquamut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestienunc ut, accumsan diam."
    );
    return (
        <div id="CLASSES" className="features mt-5 mb-5">
            <div className="container text-center">
                <Head
                    title={"OUR"}
                    supTitle={"CLASSES"}
                    description={
                        "Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
                    }
                />
                <div className="body text-start d-lg-flex align-items-center justify-content-between">
                    <div className="left-side">
                        <Feature
                            newDescription={
                                "Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
                            }
                            newLink={image1}
                            setDescription={setDescription}
                            setTitle={setTitle}
                            setLink={setLink}
                            description={"First Traning Class"}
                        />
                        <Feature
                            newDescription={
                                "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            }
                            newLink={image2}
                            setDescription={setDescription}
                            setTitle={setTitle}
                            setLink={setLink}
                            description={"Second Traning Class"}
                        />
                        <Feature
                            newDescription={
                                "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque."
                            }
                            newLink={image3}
                            setDescription={setDescription}
                            setTitle={setTitle}
                            setLink={setLink}
                            description={"Thired Traning Class"}
                        />
                        <Feature
                            newDescription={
                                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et."
                            }
                            newLink={image4}
                            setDescription={setDescription}
                            setTitle={setTitle}
                            setLink={setLink}
                            description={"Fourth Traning Class"}
                        />
                        <center className="mb-4 mb-lg-0">
                            <button className="main-button border-0 ">
                                View All Schedules
                            </button>
                        </center>
                    </div>
                    <div className="right-side">
                        <img className="w-100 mb-3" src={link} alt="" />
                        <h2 className="mb-3">{title}</h2>
                        <p className="lh-lg text-black-50 mb-3">
                            {description}
                        </p>
                        <button className="main-button border-0">
                            View Schedules
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Features;
