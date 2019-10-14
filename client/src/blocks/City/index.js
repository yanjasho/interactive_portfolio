import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import MapMarkers from "../../components/MapMarkers";
import PoweredByGoogle from "../../components/PoweredByGoogle";
import Jumbotron from "../../components/Jumbotron"

class City extends Component {

  state = {
    cities: [],
    search:"",
    name: ""
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
      this.setState({ 
        cities: res.data,    
        search:"",
        name: "" 
      })
    }).then(this.sendAchiev())
    .catch(err => console.log(err));
  };

  sendAchiev=()=>{
    this.props.callbackFromParent("Mark on the map")
  }
   
  render() {
    return (
      <Jumbotron  style={{ backgroundColor: "#ffe6ff"}}>
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
        </div>        
        <Jumbotron style={{ paddingTop: 80, backgroundColor: 	"#ffe6ff"}}>
          {(this.state.cities.length) ? (
            <MapMarkers
              cities={this.state.cities}
            />
          ): (<div>No map</div>)}
        </Jumbotron>
      </Jumbotron>
    );
  }
}

export default City;