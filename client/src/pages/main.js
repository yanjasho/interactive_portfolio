import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav"
import City from "../blocks/City"

class Main extends Component {
  state = {
    achievs: []
  };

  render() {
    return (
      <Container fluid>
        <Nav achievs={this.state.achievs} />
        <br /><br /><br />
        <City />
      </Container>
    );
  }
}
  
export default Main;