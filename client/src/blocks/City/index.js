import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import MapMarkers from "../../components/MapMarkers";
import PoweredByGoogle from "../../components/PoweredByGoogle";
import Jumbotron from "../../components/Jumbotron"
import Alert from "../../components/Alert"
import DeleteBtn from "../../components/DeleteBtn"

class City extends Component {

  state = {
    cities: [],
    search:"",
    name: "",
    alert: false,
    alertline: ""
  };

  componentDidMount() {
    this.loadCities();
  }

  loadCities = () => {
    API.getCities()
    .then(res =>
      this.setState({
        cities: res.data,     
        search:"",
        name: ""
      })
    ) 
    .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getCitiesGoogle(this.state.search.replace(/ /g, '+').replace(/,/g, ''),this.state.name)
    .then(res=>{
      if(res.data.name==="MongoError"){
        this.setState({
          alert: true,
          alertline: "Looks like it's already on a map."
        })
      }
      else if(!res.data.length){
        this.setState({
          alert: true,
          alertline: "Are you sure it's a real place?"
        })
      }
      else{
        this.setState({ 
          cities: res.data,    
          search:"",
          name: "" ,
          alert: true,
          alertline: "You've left your mark."
        })
      }
    }).then(this.sendAchiev())
    .catch(err => console.log(err));
  };

  sendAchiev=()=>{
    this.props.callbackFromParent("Mark on the map")
  }
   
  render() {
    return (
      <Jumbotron  style={{ backgroundImage: "linear-gradient(#bfbfbf, #ffe6ff, #ffe6ff, #E6E6FA)"}}>
        <p>You can add your favorite city to the map</p>
        <div className="container">
          <form>
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Favorite city"
            />
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Your name"
            />
          </form>
          <FormBtn
            disabled={!(this.state.search&& this.state.name)} onClick={this.handleSearchSubmit}>
              Search
          </FormBtn>
          <PoweredByGoogle />
          <Alert style={{ opacity: this.state.alert ? 1 : 0, width: "400px" }} >
            {this.state.alertline}
            <DeleteBtn onClick={() => this.setState({alert: false})} />
          </Alert>
        </div>        
        <div style={{ paddingTop: 80}}>
          {(this.state.cities.length) ? (
            <MapMarkers
              cities={this.state.cities}
            />
          ): (<div> Patience. Cartographers are adding some finishing touches. </div>)}
        </div>
      </Jumbotron>
    );
  }
}

export default City;