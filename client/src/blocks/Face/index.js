import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"
import HomeBtn from "../../components/HomeBtn"
import Img from "./face.png"

class Face extends Component {
    
    componentDidMount() {
        this.sendAchiev();
    }

    sendAchiev=()=>{
        this.props.callbackFromParent("Saw the Face")
    }

    render() {
        return (
            <Jumbotron style={{backgroundColor:"#ccffee"}}>
                <HomeBtn />
                <p>Here she is. And cute puppy for the balance.</p>
                <img src={Img} alt="cuteness" width="500" height="500" />
            </Jumbotron>
        );
    }
}
      
export default Face;