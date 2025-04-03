import React, { useState } from "react";
import Head from "../head/Head.js";
import "./table.css";
function Table() {
    const [dates, setDates] = useState([
        ["10:00AM - 11:30AM", ""],
        ["", ""],
        ["", "2:00PM - 3:30PM"],
        ["", ""],
        ["", ""],
    ]);
    console.log(dates);
    return (
        <div id="SHEDOULES" className="table1 pt-5 pb-5">
            <div className="container">
                <Head
                    title={"Classes"}
                    supTitle={"Schedule"}
                    description={
                        "Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
                    }
                />
                <div className="days text-center d-flex flex-wrap mx-auto mb-5 w-100">
                    <p
                        onClick={() => {
                            setDates([
                                ["10:00AM - 11:30AM", ""],
                                ["", ""],
                                ["", "2:00PM - 3:30PM"],
                                ["", ""],
                                ["", ""],
                            ]);
                        }}
                    >
                        Monday{" "}
                    </p>
                    <p>/</p>
                    <p
                        className=""
                        onClick={() => {
                            setDates([
                                ["", " 11:30AM	2:00PM - 3:30PM"],
                                ["", ""],
                                ["10:00AM - 11:30AM", ""],
                                ["", ""],
                                ["", ""],
                            ]);
                        }}
                    >
                        {" "}
                        Tuesday
                    </p>{" "}
                    <p>/</p>
                    <p
                        onClick={() => {
                            setDates([
                                ["", ""],
                                ["", ""],
                                ["", ""],
                                ["10:00AM - 11:30AM", ""],
                                ["", "2:00PM - 3:30PM"],
                            ]);
                        }}
                    >
                        {" "}
                        Wednesday
                    </p>{" "}
                    <p>/</p>
                    <p
                        onClick={() => {
                            setDates([
                                ["", ""],
                                ["", "2:00PM - 3:30PM	Paul D."],
                                ["", ""],
                                ["", ""],
                                ["10:00AM - 11:30AM", ""],
                            ]);
                        }}
                    >
                        {" "}
                        Thursday
                    </p>{" "}
                    <p>/</p>
                    <p
                        onClick={() => {
                            setDates([
                                ["", ""],
                                ["10:00AM - 11:30AM", ""],
                                ["", ""],
                                ["", "2:00PM - 3:30PM"],
                                ["", ""],
                            ]);
                        }}
                    >
                        {" "}
                        Friday
                    </p>
                </div>
                <table className="w-100 mb-5">
                    <tbody>
                        <tr>
                            <td>Fitness Class</td>
                            <td>{dates[0][0]}</td>
                            <td>{dates[0][1]}</td>
                            <td>William G. Stewart</td>
                        </tr>
                        <tr>
                            <td>Muscle Training</td>
                            <td>{dates[1][0]}</td>
                            <td>{dates[1][1]}</td>
                            <td>Paul D. Newman</td>
                        </tr>
                        <tr>
                            <td>Body Building</td>
                            <td>{dates[2][0]}</td>
                            <td>{dates[2][1]}</td>
                            <td>Boyd C. Harris</td>
                        </tr>
                        <tr>
                            <td>Yoga Training Class</td>
                            <td>{dates[3][0]}</td>
                            <td>{dates[3][1]}</td>
                            <td>Hector T. Daigle</td>
                        </tr>
                        <tr>
                            <td>Advanced Training</td>
                            <td>{dates[4][0]}</td>
                            <td>{dates[4][1]}</td>
                            <td>Bret D. Bowers</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Table;
