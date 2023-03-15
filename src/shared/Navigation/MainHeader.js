import React from "react";
import "./Styles/MainHeader.css";

function MainHeader(props) {
  return <header className="main-header">{props.children}</header>;
}

export default MainHeader;
