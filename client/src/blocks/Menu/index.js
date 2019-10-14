import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Alert from "../../components/Alert"

class Menu extends Component {

  state = {
    choices: [
      {name:"Face",
      line:"Wanna see her? Can't blame you if you don't. Wonderfull person, but not much of a looker.",
      link:"face"},
      {name:"Some back-end skill.",
      line:"Def check this out. Back-end is her thing.",
      link:"city"},
      {name: "My code",
      line:"I am a very handsome App. Wanna see me naked?",
      link:"https://github.com/yanjasho/interactive_portfolio"},
      {name: "Random fact",
      line:"Just for giggles.",
      link:"fact"},
      {name: "Little game",
      line:"Not sure if I'll make it.",
      link:"game"},
      {name: "Some front-end skill.",
      line:"This may hurt. Don't go if you have sensitive eyes or general sense of taste.",
      link:"css"}],
    alert: false,
    alertline: "",
    alertlink: ""
  };

  sendActive = () =>{
    this.props.callbackFromParent(this.state.alertlink)
  }
  
  render() {
    return (
      <Jumbotron style={{backgroundColor: "#ffe6f7"}}>
        <div>
          Hi! I am an awesome React App. Wanna know who made me? Well, my main purpose of existence is to bragg about her.
        </div>
        <Jumbotron style={{ margin: "0 auto", marginTop:"50px",width: "600px", height: "400px", backgroundImage: "radial-gradient(#d580ff,#ecf9f9)", borderRadius: "100%" }}>
          {this.state.choices.map((choice,index) => (
            <button key={index} style={{backgroundColor:"#ccffef", borderRadius: "12px", marginLeft : Math.random()*150, marginTop : Math.random()*50}} onClick={() => this.setState({alert: true, alertlink: choice.link, alertline:choice.line})}>{choice.name}
            </button>
          ))}
          <Alert style={{ opacity: this.state.alert ? 1 : 0 }} >
            {this.state.alertline} <br />
            <button style={{color:"#0000ff"}} onClick={this.sendActive} > Yeah, let's check it out</button>
            <DeleteBtn onClick={() => this.setState({alert: false})} />
          </Alert>
        </Jumbotron>
      </Jumbotron>
    )
  }
}
  
export default Menu;