import React from "react";
import "./NavigationBar.css";
import Logotype from "../../shared/images/logo.svg";
import { useHistory } from "react-router-dom";

export const NavigationBar = () => {
  const history = useHistory();

  return (
    <nav className="navigation-bar-wrapper">
      <img
        onClick={() => history.push("/")}
        className="logo"
        src={Logotype}
        alt="Error..."
      />
      {/*  <span>Home</span> */}
      <span onClick={() => history.push("/sign-in")} className="sign-in">
        Sign in
      </span>
    </nav>
  );
};
