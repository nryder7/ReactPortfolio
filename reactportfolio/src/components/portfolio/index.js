import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import "./style.css";
import projects from "../../projects.json";

function Portfolio() {
    return (
        <div>
            <h1 id="h1">Portfolio</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mw-100">
                {projects.map(project => (
                    <Card
                        key={project.id}
                        name={project.name}
                        imgsrc={project.imgsrc}
                        href1={project.href1}
                        href2={project.href2}
                    />
                ))}
            </div>
        </div >
    );
}

export default Portfolio;
