import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Card(props) {
    return (
        <div>
            <div className="col mb-4">
                <div className="card border">
                    <h5 className="card-title">
                        <a href={props.href1} target="_blank">{props.name}</a>
                    </h5>
                    <img src={props.imgsrc} className="card-img-top" alt={props.name} />
                    <div className="card-body">
                        <a href={props.href2} target="_blank">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
