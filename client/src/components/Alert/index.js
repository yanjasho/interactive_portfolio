import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, backgroundColor: "#d9b3ff", ...props.style }}
    >
      {props.children}
    </div>
  );
}

export default Alert;