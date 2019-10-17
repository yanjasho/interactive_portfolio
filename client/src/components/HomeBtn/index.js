import React, { Component } from "react";
import "./style.css";

class HomeBtn extends Component {

  sendHome =() =>{
    this.props.callbackFromParent("home")
  }

  render() {
    return (
      <button onClick={this.sendHome} className="home-btn"  tabIndex="0" style={{ cursor: 'pointer'}}>
        Main Menu
      </button>
    );
  }
}

export default HomeBtn;