import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"

class Code extends Component {

    sendAchiev=()=>{
        this.props.callbackFromParent("Code guts")
    }

    render() {
        return (
            <Jumbotron style={{backgroundColor:"#ffe6cc", padding:200}}>
                <p> My whole thing is React. Rendered as one page, components get switched by Menu buttons. Achievements get tracked by App component state and passed to/from children by props and callbacks</p>
                <p>Map with markers is rendered by google-map-react npm package. Search is made by server-side call to Google Places API. Data about favorite cities fed from/saved into MongoDB, server-side communication with said database is supported by Mongoose. </p>
                <p>Server is set by Express framework. Requests supported by Axios.</p>
                <p>Styling is done by Bootstrap and a lot of cussing just for the purpose of showing vague familiarity with CSS.</p>
                <p>Deployed to Heroku.</p>
                <a style={{color:"#cc0066"}} href="https://github.com/yanjasho/interactive_portfolio" target="_blank" onClick={this.sendAchiev}>I am a very handsome App. Here you can see me naked.</a>
            </Jumbotron>
        );
    }
}
      
export default Code;