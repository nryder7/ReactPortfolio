import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Contact() {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
            <div id="contactMeContainer" className="card w-100 mx-auto border-0 ">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5>Contact</h5>
                    </li>
                    <li className="list-group-item">
                        <label for="name"><a href="mailto:nryder7@gmail.com" target="_blank">nryder7@gmail.com</a></label>
                    </li>
                    <li className="list-group-item">
                        <label for="name"><a href="https://linkedin.com/in/nicholas-ryder-8a72021b3"
                            target="_blank">LinkedIn</a></label>
                    </li>
                    <li className="list-group-item">
                        <label for="name">704-618-9709</label>
                    </li>
                    <li className="list-group-item">
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;


