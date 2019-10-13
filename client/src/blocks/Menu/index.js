import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav"
import City from "../City"
import Alert from "../../components/Alert"
import { link } from "fs";

class Menu extends Component {

  state = {
    choices: [
      {name:"Face",
      line:"Wanna see her? Can't blame you if you don't. Wonderfull person, but not much of a looker",
      link:""},
      {name:"Some back-end skill",
      line:"Def check this out. Back-end is her thing",
      link:"/city"},
      {name: "My code",
      line:"I am a very handsome App. Wanna see me naked?",
      link:"https://github.com/yanjasho/interactive_portfolio"},
      {name: "Random fact",
      line:"Just for giggles",
      link:""},
      {name: "Little game",
      line:"Not sure if I'll make it",
      link:""},
      {name: "Some front-end skill",
      line:"This may hurt. Don't go if you have sensitive eyes or general sense of taste",
      link:""}],
    alert: false,
    alertline: "",
    alertlink: ""
  };

  render() {
    return (
      <Jumbotron>
        <Container>
          Hi! I am an awesome React App. Wanna know who made me? Well, my main purpose of existence is to bragg about her.
        </Container>
        <Container>
          {this.state.choices.map((choice,index) => (
            <Container key={index}>
              <button onClick={() => this.setState({alert: true, alertlink: choice.link, alertline:choice.line})}>{choice.name}</button>
            </Container>
          ))}
          <Alert style={{ opacity: this.state.alert ? 1 : 0 }} >
            {this.state.alertline}
            <a href={this.state.alertlink}> Yeah, let's check it out</a>
            <DeleteBtn onClick={() => this.setState({alert: false})} />
          </Alert>
        </Container>
      </Jumbotron>
    )
  }
}
  
export default Menu;