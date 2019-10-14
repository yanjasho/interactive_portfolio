import React, { Component } from "react";
import Nav from "./components/Nav"
import City from "./blocks/City"
import Menu from "./blocks/Menu"
import Face from "./blocks/Face"
import HomeBtn from "./components/HomeBtn"

class App extends Component {

  constructor(props) { 

    super(props);
    this.state = {
      achievs: [],
      components:[<Menu {...props} callbackFromParent={this.changeActive} />, <City {...props} callbackFromParent={this.getAchiev} />, <Face {...props} callbackFromParent={this.getAchiev} />],
      activecomp: <Menu {...props} callbackFromParent={this.changeActive} />
    }
  };

  getAchiev = data => {
    if(this.state.achievs.indexOf(data)==-1){
            this.setState(prevState => ({
        achievs: [...prevState.achievs, data]
      }))
    }
    if(this.state.achievs.length == 6){
      this.setState({
        activecomp:"Giftshop"
      })
    }
  }

  changeActive = comp =>{
    
    switch(comp) {
      case "face":
        this.setState({
          activecomp: this.state.components[2]
        })
        break;
      case "city":
        this.setState({
          activecomp: this.state.components[1]
        })
        break;
      case "code":
        this.setState({
          activecomp: this.state.components[0]
        })
        break;
      case "game":
        this.setState({
          activecomp: this.state.components[0]
        })
        break;
      case "fact":
        this.setState({
          activecomp: this.state.components[0]
        })
        break;
      case "home":
        this.setState({
          activecomp: this.state.components[0]
        })
        break;
      default:
        this.setState({
          activecomp: this.state.components[0]
        })
    }
  }

  render() {
    return (
      <div>
        <Nav achievs={this.state.achievs} />
        <div>
        <HomeBtn callbackFromParent={this.changeActive} /></div>
        <div>
          {this.state.activecomp}
        </div>
      </div>
    );
  }
}

export default App;