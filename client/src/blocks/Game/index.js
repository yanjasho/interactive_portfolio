import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"
import Alert from "../../components/Alert"
import DeleteBtn from "../../components/DeleteBtn"

class Game extends Component {

    state = {
        selectedX: [],
        selectedO: [],
        choices: ["11","12","13","21","22","23","31","32","33"],
        alert: false,
        alertext:"",
        gamover: false
    }

    handleClick = event => {
        event.preventDefault();
        const val = event.target.value;
        if (this.state.selectedO.indexOf(val)===-1 && this.state.selectedX.indexOf(val)===-1){
            event.target.textContent="X"
            event.target.style.backgroundColor="#ffff99"
            this.removeChoice(val)
            this.setState(prevState => ({
                selectedX:  [...prevState.selectedX, val]
            }), this.checkWin)
        }
    }

    removeChoice=val=>{
        let array = [...this.state.choices]
        let index = array.indexOf(val)
        if (index > -1) {
            array.splice(index,1)
            this.setState({choices: array})
        }
    }

    checkWin=()=>{
        if(
        (this.state.selectedX.indexOf("11")>-1&&this.state.selectedX.indexOf("12")>-1&&this.state.selectedX.indexOf("13")>-1)||
        (this.state.selectedX.indexOf("21")>-1&&this.state.selectedX.indexOf("22")>-1&&this.state.selectedX.indexOf("23")>-1)||(this.state.selectedX.indexOf("31")>-1&&this.state.selectedX.indexOf("32")>-1&&this.state.selectedX.indexOf("33")>-1)||
        (this.state.selectedX.indexOf("11")>-1&&this.state.selectedX.indexOf("21")>-1&&this.state.selectedX.indexOf("31")>-1)||
        (this.state.selectedX.indexOf("12")>-1&&this.state.selectedX.indexOf("22")>-1&&this.state.selectedX.indexOf("32")>-1)||
        (this.state.selectedX.indexOf("13")>-1&&this.state.selectedX.indexOf("23")>-1&&this.state.selectedX.indexOf("33")>-1)||
        (this.state.selectedX.indexOf("11")>-1&&this.state.selectedX.indexOf("22")>-1&&this.state.selectedX.indexOf("33")>-1)||
        (this.state.selectedX.indexOf("13")>-1&&this.state.selectedX.indexOf("22")>-1&&this.state.selectedX.indexOf("31")>-1)
        ){
            this.setState({alert: true, alertext: "Would you look at the mighty brain on that human!", gamover: true})
            this.sendAchiev()
        }
        else{
            this.appTurn()
        }
    }

    appTurn=()=>{
        const randomIndex = Math.floor(Math.random() * this.state.choices.length)
        const appChoice = this.state.choices[randomIndex]
        if (this.state.selectedO.indexOf(appChoice)===-1 && this.state.selectedX.indexOf(appChoice)===-1){
            this.setState(prevState => ({
                selectedO:  [...prevState.selectedO, appChoice]
            }), this.checkLose)
            this.markO(appChoice)
            this.removeChoice(appChoice)
        }
    }

    markO=O=>{
        if(this.state.choices.length===0){
            this.setState({alert: true, alertext: "Not all battles are meant to be won. However truce is not peace.", gamover: true})
        }
        else{
            this.refs[O].textContent="0"
            this.refs[O].style.backgroundColor="#4dffdb"
        }
    }

    checkLose=()=>{
        if(
        (this.state.selectedO.indexOf("11")>-1&&this.state.selectedO.indexOf("12")>-1&&this.state.selectedO.indexOf("13")>-1)||
        (this.state.selectedO.indexOf("21")>-1&&this.state.selectedO.indexOf("22")>-1&&this.state.selectedO.indexOf("23")>-1)||(this.state.selectedO.indexOf("31")>-1&&this.state.selectedO.indexOf("32")>-1&&this.state.selectedO.indexOf("33")>-1)||
        (this.state.selectedO.indexOf("11")>-1&&this.state.selectedO.indexOf("21")>-1&&this.state.selectedO.indexOf("31")>-1)||
        (this.state.selectedO.indexOf("12")>-1&&this.state.selectedO.indexOf("22")>-1&&this.state.selectedO.indexOf("32")>-1)||
        (this.state.selectedO.indexOf("13")>-1&&this.state.selectedO.indexOf("23")>-1&&this.state.selectedO.indexOf("33")>-1)||
        (this.state.selectedO.indexOf("11")>-1&&this.state.selectedO.indexOf("22")>-1&&this.state.selectedO.indexOf("33")>-1)||
        (this.state.selectedO.indexOf("13")>-1&&this.state.selectedO.indexOf("22")>-1&&this.state.selectedO.indexOf("31")>-1)
        ){
            this.setState({alert: true, alertext: "And that's how computers will overthrow humanity!", gamover: true})
        }
    }

    sendAchiev=()=>{
        this.props.callbackFromParent("Beat the AI")
    }

    render() {
        return (
            <Jumbotron style={{backgroundImage: "linear-gradient(#bfbfbf, #fad4e3, #fad4e3, #E6E6FA)"}}>
                <Alert style={{ opacity: this.state.alert ? 1 : 0 }} >
                    {this.state.alertext}
                    <DeleteBtn onClick={() => this.setState({alert: false})} />
                </Alert>
                <br />
                <p>And it's a tic-tac-toe. Ya'll thought it'll be rock-paper-scissors, don't you?</p>
                <br />
                <div className="btn-group btn-group-lg" role="group" aria-label="firstrow">
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary" value="11" ref="11" onClick={this.handleClick} >&#119136;</button>
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="12" ref="12" onClick={this.handleClick}>&#119136;</button>
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary" value="13" ref="13" onClick={this.handleClick}>&#119136;</button>
                </div>
                <br />
                <div className="btn-group btn-group-lg" role="group" aria-label="secondrow">
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="21" ref="21" onClick={this.handleClick}>&#119136;</button>
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="22" ref="22" onClick={this.handleClick}>&#119136;</button>
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="23" ref="23" onClick={this.handleClick}>&#119136;</button>
                </div>
                <br />
                <div className="btn-group btn-group-lg" role="group" aria-label="thirdrow">
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="31" ref="31" onClick={this.handleClick}>&#119136;</button>
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="32" ref="32" onClick={this.handleClick}>&#119136;</button>
                    <button disabled={this.state.gamover} style={{borderWidth:"1px", borderColor: "#eb2d78"}} type="button" className="btn btn-secondary"  value="33" ref="33" onClick={this.handleClick}>&#119136;</button>
                </div>
            </Jumbotron>
        );
    }
}
      
export default Game;