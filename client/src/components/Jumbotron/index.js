import React from "react";

function Jumbotron(props) {
  return (
    <div
      style={{ height: "auto", clear: "both", paddingTop: 120, textAlign: "center", ...props.style }}
      className="jumbotron" 
    >
      {props.children}
    </div>
  );
}

export default Jumbotron;
