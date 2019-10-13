import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import City from "./blocks/City"
import Menu from "./blocks/Menu"
import Face from "./blocks/Face"

class App extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      achievs: []
    }
  };

  getAchiev = data =>{
    this.setState(prevState => ({
      achievs: [prevState.achievs, data]
    }))
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Nav achievs={this.state.achievs} />
        <Router>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/city" render={(props) => <City {...props} callbackFromParent={this.getAchiev}  />} />
            <Route exact path="/face" render={(props) => <Face {...props} callbackFromParent={this.getAchiev}  />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
