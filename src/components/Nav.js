import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="title text-center">MaskUP</h1>
      </Link>
      <ul className="navb">
        <li className="navs">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="navs">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="navs">
          <Link to={"/github"}>GitHub</Link>
        </li>
        <li className="navs">
          <Link to={"/feedback"}>Feedback</Link>
        </li>
      </ul>
    </div>
  );
}
