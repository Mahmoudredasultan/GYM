import React from "react";
import Navbar from "../../componants/navbar/navbar.js";
import Video from "../../componants/vedio/Video.js";
import Program from "../../componants/program/Program.js";
import Separate from "../../componants/separate/Separate.js";
import Features from "../../componants/features/Features.js";
import Table from "../../componants/table/Table.js";
import Captens from "../../componants/captens/Captens.js";
import Contact from "../../componants/contact/Contact.js";
import Footer from "../../componants/footer/Footer.js";
function Home() {
    return (
        <div className="class">
            <Navbar />
            <Video />
            <Program/>
            <Separate/>
            <Features/>
            <Table/>
            <Captens/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default Home;
