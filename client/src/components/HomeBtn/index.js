import React from "react";
import "./style.css";

function HomeBtn(props) {
  return (
    <a href="/" className="home-btn" {...props} role="button" tabIndex="0" style={{ cursor: 'pointer'}}>
      Main Menu
    </a>
  );
}

export default HomeBtn;