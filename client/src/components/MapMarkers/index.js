import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";

class MapMarkers extends Component {

  static defaultProps = {
    center: {
      lat: 43.0389,
      lng: -87.9065
    },
    zoom: 0
  };

  render() {
    return (
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBap6GsUVTerufk06KNzEnEOuWvRvuYkjU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         {this.props.cities.map(city => (
            <Marker
              key={city._id}
              name={city.name}
              lat={city.location.lat}
              lng={city.location.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default MapMarkers;