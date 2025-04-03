import React from "react";
import Head from "../head/Head.js";
import Capten from "../capten/Capten.js";
import image1 from "../../images/first-trainer.jpg"
import image2 from "../../images/second-trainer.jpg"
import image3 from "../../images/third-trainer.jpg"
import "./captens.css";
function Captens() {
    return (
        <div className="captens mt-5 mb-5">
            <div className="container">
                <Head
                    title={"EXPERT"}
                    supTitle={"TRAINERS"}
                    description={
                        "Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
                    }
                />
                <div className="opt row">
                    <Capten
                        link={image1}
                        title={"Strength Trainer"}
                        description={
                            "Bitters cliche tattooed 8-bit distillery mustache. Keytarsucculents gluten-free vegan church-key pour-over seitan flannel."
                        }
                        name={"Bret D. Bowers"}
                    />
                    <Capten
                        link={image2}
                        title={"Muscle Trainer"}
                        description={
                            "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
                        }
                        name={"Hector T. Daigl"}
                    />
                    <Capten
                        link={image3}
                        title={"Power Trainer"}
                        description={
                            "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
                        }
                        name={"Paul D. Newman"}
                    />
                </div>
            </div>
        </div>
    );
}
export default Captens;
