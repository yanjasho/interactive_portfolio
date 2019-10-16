const axios = require("axios");
const db = require("../models");

module.exports = function(app) {

  app.get("/api/search/", (req, res) => {
    const link = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+req.query.city+"&key="+process.env.REACT_APP_API_PLACES
    axios.get(link)
    .then(function(response) {
      db.City.create({
        city: response.data.results[0].name,
        name: req.query.name,
        location:response.data.results[0].geometry.location
      })
      .then(function(){
        db.City.find({})
        .then(dbCity => res.json(dbCity))
      })
      .catch(function(err) {
        res.json(err);
      })
    })
    .catch(function(err) {
      res.json(err);
    });
  });
  
  app.get("/api/cities/", (req, res) => {
    db.City.find({})
    .then(dbCity => res.json(dbCity))
    .catch(function(err) {
      res.json(err);
    });
  })
}