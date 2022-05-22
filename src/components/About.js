import React from "react";
import "../App.css";
import Nav from "./Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <h1 className="title2 text-center">About Us</h1>
      <p className="aboutdesc1 text-center">
        This Mask Detection system works using ReactJS Front-End and a Custom
        Fine-Tuned Tensorflow Datamodel to Detect and Capture Images of People
        not wearing a Face Mask.
      </p>
      <p className="aboutdesc2 text-center">
        This Project was Created by :-{" "}
        <ul className="ournames">
          <li className="names">Satyam Thakur</li>
          <li className="names">Ayush Arora</li>
          <li className="names">Hudaib Mahmood</li>
          <li className="names">Bhavjeet Singh</li>
        </ul>{" "}
        for our B.Tech Final Year Project Submission. You can contact us By
        clicking our names
      </p>
    </div>
  );
};

export default About;
