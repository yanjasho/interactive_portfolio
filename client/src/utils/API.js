import axios from "axios";

export default {
  getCitiesGoogle: function(city,name){
    return axios.get("/api/search/", {
      params: {city: city, name: name}
    });
  },
  getCities: function(){
    return axios.get("/api/cities/");
  }
};