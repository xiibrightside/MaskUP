import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1 className="title text-center">MaskUP</h1>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/github"}>GitHub</NavLink>
        <NavLink to={"/feedback"}>Feedback</NavLink>
      </nav>
    </div>
  );
}
