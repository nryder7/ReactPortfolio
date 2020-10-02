import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../components/navbar";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function About() {
    return (
        <>
        {Navbar}
        <div className="row row-cols-sm-2">
            <div id="aboutMeContainer" className="container w-75 border">
                <div className="row">
                    <div className="col">
                        <h5>About Me</h5>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img id="image" src="Assets/headshot.png" alt="Head Shot"
                                size="max-height:150px; max-width: 150px" className="img-thumbnail" />
                            <p id="aboutMeText">
                                I live in Charlotte, NC and I am currently enrolled in the UNC Charlotte Coding Bootcamp for web development. I have 7 years of experience in the financial industry and passed the
                                FINRA series 7, 9, 10, & 66 licensing exams. I recently worked for Wells Fargo Advisors as a Regional Supervisor
                                in remote sales supervision. My hobbies include video games, grilling, and stock trading.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    /* <Link
      to="/"
      classNameName={
        window.location.pathname === "/" || window.location.pathname === "/home"
          ? "nav-link active"
          : "nav-link"
      }
    >
      Home
    </Link> */

  );
}

export default About;
