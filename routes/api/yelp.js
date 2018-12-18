/**
 * Yelp Fusion API tie in
 *
 * @author: Elliot Fortney
 */

const axios = require('axios');
const yelp = require('yelp-fusion');
const apiKey = require('../../config/keys').yelp;
const client = yelp.client(apiKey);
const mongoose = require('mongoose');
const Location = mongoose.model('location');
const User = mongoose.model('users');

//
module.exports = {
  /**
   * Makes a request to the API conducting a general business search.
   * @param {String} term : the search keyword
   * @param {String} location : the location the search is being conducted in
   */
  makeRequest(term, lat, long) {
    console.log(` ${term}, ${lat},${long}`);
    let result = client
      .search({
        term: term,
        location: `${lat},${long}`
      })
      .then(res => {
        return this.buildLocation(res.jsonBody.businesses[0]);
      })
      .catch(error => {
        console.log(error);
      });
  },

  /**
   * Builds a location from the resulting data, and stores it in the database for the user.
   * @param {JSON} location
   */
  buildLocation(location) {
    let result = async done => {
      const existingLocation = await Location.findOne({
        address : location.location.address1
      });
      if (existingLocation) {
        return done(null, existingLocation);
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
        return done(null,newLocation);
      }
    };
    result();
  }
};
