import React, { Component } from "react";
// import Main from "./pages/main"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import City from "./blocks/City"
import Menu from "./blocks/Menu"

class App extends Component {

  state = {
    achievs: []
  };

  getAchiev = data =>{
    this.setState(prevState => ({
      achievs: [...prevState.achievs, data]
    }))
  }

  render() {
    return (
      <Router>
      <div>
        <Nav achievs={this.state.achievs} />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/city" render={(props) => <City {...props} callbackFromParent={this.getAchiev}  />} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
