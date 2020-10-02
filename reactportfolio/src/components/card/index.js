import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Card() {
    return (
        <div>
            <div className="col mb-4">
                <div className="card border">
                    <h5 className="card-title">
                        <a href="https://nryder7.github.io/PasswordGenerator/" target="_blank">Password
                                Generator</a>
                    </h5>
                    <img src="Assets/password.png" className="card-img-top" alt="Password Generator" />
                    <div className="card-body">
                        <a href="https://github.com/nryder7/PasswordGenerator" target="_blank">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
