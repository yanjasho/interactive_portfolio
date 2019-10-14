import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"
import Alert from "../../components/Alert"
import DeleteBtn from "../../components/DeleteBtn"

class Fact extends Component {

    state = {
        selectedOption: "",
        alert: false,
        alertext:""
    }

    handleOptionChange = event => {
        this.setState({
          selectedOption: event.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.selectedOption=="hyena"){
            this.sendAchiev();
            this.setState({alert:true, alertext: "Exactly. Adorable creature, just like her!"})
        }
        else{
            this.setState({alert:true, alertext: "Whilst all the listed beings are appealing to her nature, that is not the one."}) 
        }
    };

    sendAchiev=()=>{
        this.props.callbackFromParent("Soul Mate")
    }

    render() {
        return (
            <Jumbotron style={{backgroundColor:"#f9ecf2"}}>
                <p>Hey, wanna guess her soul animal?</p>
                <Alert style={{ opacity: this.state.alert ? 1 : 0 }} >
                    {this.state.alertext}
                    <DeleteBtn onClick={() => this.setState({alert: false})} />
                </Alert>
                <form onSubmit={this.handleFormSubmit}>
                    <br />
                    <div>
                        <input type="radio" value = "slot" checked={this.state.selectedOption === "slot"} onChange={this.handleOptionChange} /> Slot
                    </div>
                    <br />
                    <div>
                        <input type="radio" value = "owl" checked={this.state.selectedOption === "owl"} onChange={this.handleOptionChange} /> Owl
                    </div>
                    <br />
                    <div>
                        <input type="radio" value = "hyena" checked={this.state.selectedOption === "hyena"} onChange={this.handleOptionChange} /> Hyena
                    </div>
                    <br />
                    <div>
                        <input type="radio" value = "platypus" checked={this.state.selectedOption === "platypus"} onChange={this.handleOptionChange} /> Platypus
                    </div>
                    <br />
                    <div>
                        <input type="radio" value = "potato" checked={this.state.selectedOption === "potato"} onChange={this.handleOptionChange} /> Potato
                    </div>
                    <br /> <br />
                    <div className="form-group">
                        <button className="btn btn-primary mt-2" style={{backgroundColor:"#ff9966"}} type="submit">
                            I suppose...
                        </button>
                    </div>
                </form>
            </Jumbotron>
        );
    }
}
      
export default Fact;