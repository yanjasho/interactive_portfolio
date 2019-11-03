import React, { Component } from "react";
import Nav from "./components/Nav"
import City from "./blocks/City"
import Menu from "./blocks/Menu"
import Face from "./blocks/Face"
import Fact from "./blocks/Fact"
import Game from "./blocks/Game"
import Code from "./blocks/Code"
import Css from "./blocks/Css"
import Titles from "./blocks/Titles"
import HomeBtn from "./components/HomeBtn"
import Alert from "./components/Alert"

class App extends Component {

  constructor(props) { 

    super(props);
    this.state = {
      achievs: [],
      activecomp: <Menu callbackFromParent={this.changeActive} />,
      alert: false,
      alertline: ""
    }
  };

  getAchiev = data => {
    if(this.state.achievs.indexOf(data)===-1){
      this.setState(prevState => ({
        achievs: [...prevState.achievs, data]
      }))
    }
    if(this.state.achievs.length === 5){
      this.setState({
        alert: true,
        alertline: "As much as I enjoying having you here, that was all I had to show."
      })
    }
  }

  changeActive = comp =>{
    
    switch(comp) {
      case "face":
        this.setState({
          activecomp: <Face callbackFromParent={this.getAchiev} />
        })
        break;
      case "city":
        this.setState({
          activecomp: <City callbackFromParent={this.getAchiev} />
        })
        break;
      case "code":
        this.setState({
          activecomp:  <Code callbackFromParent={this.getAchiev} />
        })
        break;
      case "titles":
        this.setState({
          activecomp: <Titles />
        })
        break;
      case "fact":
        this.setState({
          activecomp: <Fact callbackFromParent={this.getAchiev} />
        })
        break;
      case "game":
        this.setState({
          activecomp: <Game callbackFromParent={this.getAchiev} />
        })
        break;
      case "css":
        this.setState({
          activecomp: <Css callbackFromParent={this.getAchiev} />
        })
        break;
      case "home":
        this.setState({
          activecomp: <Menu achievs={this.state.achievs.length} callbackFromParent={this.changeActive} />
        })
        break;
      default:
        this.setState({
          activecomp: <Menu achievs={this.state.achievs.length} callbackFromParent={this.changeActive} />
        })
    }
  }

  sendTitles =() =>{
    this.setState({
      activecomp: <Titles />,
      alert: false
    })
  }

  render() {
    return (
      <div>
        <Nav achievs={this.state.achievs} />
        <div>
          <HomeBtn callbackFromParent={this.changeActive} />
        </div>
        {this.state.alert ? <Alert style={{ opacity: this.state.alert ? 1 : 0, position: "absolute", top: "30%", right: "30%", width:"500px"}} >
          {this.state.alertline} <br />
          <button style={{color:"#0000ff", backgroundColor: "#ccffcc", float: "left"}} onClick={this.sendTitles} > Exit through the gift shop.</button>
          <button style={{color:"#0000ff", backgroundColor:"#ffc2b3", float: "right"}} onClick={() => this.setState({alert: false})} > Stick around. </button>
        </Alert> : null}
        <div>
          {this.state.activecomp}
        </div>

      </div>
    );
  }
}

export default App;