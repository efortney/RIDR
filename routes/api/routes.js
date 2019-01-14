const passport = require('passport');
const axios = require('axios');
const yelp = require('yelp-fusion');
const apiKey = require('../../config/keys').yelp;
const client = yelp.client(apiKey);
const mongoose = require('mongoose');
const Location = mongoose.model('location');
const User = mongoose.model('users');
const requireLogin = require('./requireLogin').requireLogin;

module.exports = app => {
  // logout route
  app.get('/api/logout', requireLogin, (req, res) => {
    req.logout();
    res.redirect('/');
  });

  /**
   * Performs a search using the user destination, the desired location, and returns the
   * first available result
   */
  app.post('/api/search', requireLogin, async (req, res) => {
    console.log(req.location);
    let jsonPayload = req.body;
    let val = await makeRequest(
      jsonPayload.destination,
      jsonPayload.lat,
      jsonPayload.long
    );
    const location = await new Location({
      name: val.name,
      image: val.image_url,
      coordinates: {
        latitude: val.coordinates.latitude,
        longitude: val.coordinates.latitude
      },
      rating: val.rating,
      is_closed: val.is_closed,
      display_phone: val.display_phone
    });
    console.log(location);
    res.render('result', {
      location: location
    });
  });

  // grabs the current user for the application
  app.get('/api/current_user', requireLogin, (req, res) => {
    console.log('getting user');
    res.send(req.user);
    console.log(req.user);
  });

  /**
   * Makes a request to the API conducting a general business search.
   * @param {String} term : the search keyword
   * @param {String} location : the location the search is being conducted in
   */
  async function makeRequest(term, lat, long) {
    let result = client
      .search({
        term: term,
        location: `${lat},${long}`
      })
      .then(res => {
        let destination = res.jsonBody.businesses[0];
        buildLocation(destination);
        return destination;
      })
      .catch(error => {
        console.log(error);
      });

    return result;
  }

  /**
   * Builds a location from the resulting data, and stores it in the database for the user.
   * @param {JSON} location
   */
  async function buildLocation(location) {
    let result = async done => {
      const existingLocation = await Location.findOne({
        address: location.location.address1
      });
      if (existingLocation) {
        return existingLocation;
      } else {
        // build a new location in the db and save it
        const newLocation = await new Location({
          address: location.location.address1,
          name: location.name,
          coordinates: {
            longitude: location.coordinates.longitude,
            latitude: location.coordinates.latitude
          },
          rating: location.rating,
          is_closed: location.is_closed
        }).save();
        return newLocation;
      }
    };
    result();
  }
};
