import React from "react";
import Nav from "./Nav";

const GitHub = () => {
  return (
    <div>
      <Nav />
      <h1 className="title2 text-center">Repository URL</h1>
      <p className="aboutdesc1 text-center">
        Click the Git icon to access the entire Source Code{" "}
      </p>
      <a href="#0">
        <div className="git pt-8 text-center">
          <i class="fa-6x fa-brands fa-github"></i>
        </div>
      </a>
    </div>
  );
};

export default GitHub;
