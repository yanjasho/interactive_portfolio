import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"
import Alert from "../../components/Alert"
import DeleteBtn from "../../components/DeleteBtn"

class Game extends Component {

    state = {
    }

    sendAchiev=()=>{
        this.props.callbackFromParent("Beat the AI")
    }

    render() {
        return (
            <Jumbotron style={{backgroundImage: "linear-gradient(#bfbfbf, #f9ecf2, #f9ecf2, #E6E6FA)"}}>

            </Jumbotron>
        );
    }
}
      
export default Game;