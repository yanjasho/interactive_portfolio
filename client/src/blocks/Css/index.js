import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"

class Css extends Component {

    componentDidMount() {
        this.sendAchiev();
    }
    
    sendAchiev=()=>{
        this.props.callbackFromParent("Designster Witness")
    }

    render() {
        return (
            <Jumbotron style={{backgroundImage: "radial-gradient(#00ff00, #ffffcc, #ffffcc, #e6e600, #3333cc)"}}>
                <div>
                    <p style={{writingMode: "vertical-rl", fontSize: "20px"}}>Do not trust her with any front-end!</p>
                    <p style={{transform: "rotateY(130deg)", fontSize: "25px" }}> She can, but she better not</p>
                    <p style={{fontSize: "30px", textShadow: "3px 3px red" }}>No taste</p>
                    <p style={{fontSize: "10px", color: "#0000ff"}}>Trash and madness</p>
                    <p style={{transform: "rotate(20deg)", fontSize: "50px" }}>Just no</p>
                </div>
            </Jumbotron>
        );
    }
}
      
export default Css;