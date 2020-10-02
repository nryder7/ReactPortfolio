import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
// import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <Card />
            <Card />
            <Card />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <Card />
            <Card />
            <Card />
            </div>
        </div >
    );
}

export default Portfolio;
