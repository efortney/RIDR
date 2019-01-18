const passport = require('passport');
const keys = require('../../config/keys');
const axios = require('axios');
const yelp = require('yelp-fusion');
const apiKey = require('../../config/keys').yelp;
const client = yelp.client(apiKey);
const mongoose = require('mongoose');
const Location = mongoose.model('location');
const User = mongoose.model('users');

module.exports = app => {
  // logout route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  /**
   * Performs a search using the user destination, the desired location, and returns the
   * first available result
   */
  app.post('/api/search', async (req, res) => {
    let jsonPayload = req.body;
    let val = await makeRequest(
      jsonPayload.destination,
      jsonPayload.lat,
      jsonPayload.lng
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
    let data = await getUberPriceEstimates(jsonPayload.lat, jsonPayload.lng, location.coordinates.latitude, location.coordinates.longitude);
    res.render('result', {
      val: val,
      data : data 
    });
  });

  /**
   * This route is responsible for performing a search against the Uber API to
   * bring back all available rides.
   */
  app.get('/api/orderRide/uber', async (req, res) => {
    console.log('attempting to make request');
    let data = await getUberPriceEstimates();
    console.log(data);
    res.json(data);
  });

  // grabs the current user for the application
  app.get('/api/current_user', (req, res) => {
    console.log('getting user');
    res.send(req.user);
    console.log(req.user);
  });

  /**
   * getUberResults is responsible for making a call to Ubers api to retrieve
   * ride estimates for prices. It uses our unique server token in order to
   * validate with the api.
   * @param {String} userCurrentLat : the lat the user is at 
   * @param {String} userCurrentLng : the current lng the user is at
   * @param {requestedLat} : the requested lat from the searched location 
   * @param {requestedLng} : the requested lng from the searched location 
   */
  async function getUberPriceEstimates(userCurrentLat, userCurrentLng, requestedLat, requestedLng) {
    console.log('Coordinates: ' + userCurrentLat + ' ' + userCurrentLng + ' ' + requestedLat + ' ' + requestedLng )
    const data = axios
      .get(
        `https://api.uber.com/v1.2/estimates/price?start_latitude=${userCurrentLat}&start_longitude=${userCurrentLng}&end_latitude=${requestedLat}&end_longitude=${requestedLng}`,
        {
          headers: {
            Authorization: 'Token ' + '71zCZTX54_RFpzJndt22SrpjEydNT01kuc5KRbK5'
          }
        }
      )
      .then(res => {
        console.log('response: ' + JSON.stringify(res.data) );
        return res.data;
      })
      .catch(err => {
        console.log('ERROR AT getUberResults: ' + err);
      });

    return data;
  }

  /**
   * Makes a request to the API conducting a general business search.
   * @param {String} term : the search keyword
   * @param {String} location : the location the search is being conducted in
   */
  async function makeRequest(term, lat, long) {
    console.log('lat: ' + lat + ' long: ' + long);
    let result = client
      .search({
        term: term,
        location: `${lat},${long}`
      })
      .then(res => {
        let destination = res.jsonBody.businesses[0];
        buildLocation(destination, lat, long);
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
  async function buildLocation(location, lat, long) {
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
          current_coordinates: {
            longitude: long,
            latitude: lat
          },
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
