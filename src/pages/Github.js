import React from "react";
import Nav from "../components/Nav";

const GitHub = () => {
  return (
    <div>
      <Nav />
      <h1 className="title2 text-center">Source Code</h1>
      <p className="aboutdesc1 text-center">
        Click on the Git icon below to access the entire Source Code{" "}
      </p>

      <div className="pt-8 text-center">
        <a className="git" href="https://github.com/xiibrightside/MaskUP">
          <i class="fa-6x fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default GitHub;
