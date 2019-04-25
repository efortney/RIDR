const keys = require('../../config/keys');
const axios = require('axios');
const apiKey = require('../../config/keys').yelp;
const config = require('../../config/keys');
const mongoose = require('mongoose');
const Location = mongoose.model('location');

const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);

const Lyft = require('lyft-node');

module.exports = app => {

  /**
   * Sorts the returned bars by the rating 
   * @param {JSON array} barList 
   */
  function sortByRating(barList) {
    let topBars = [];
    let bars = barList.businesses;
    for (let i = 0; i < 3; i++) {
        if(bars[i].rating >= 4.5) {
            topBars.push(bars[i]);
        }
    }
    return topBars;
  }

  /**
   * Route for retrieving the top bars in the area 
   */
  app.post('/api/localbars', async (req, res) => {
    let location = req.body.location;
    let bars = await getHotBars(location.lat, location.lng);
    res.send(bars);
  });

  /**
   * Gathers a list of the best rated bars in the area
   * that the user is in, this function should also be moved 
   * but again, who gives a shit since we cant even publish this
   */
  async function getHotBars(lat, lng) {
    return client.search({
        term: 'bars',
        location: `${lat}, ${lng}`
      })
      .then(res => {
        let results = res.jsonBody;
        let sortedBars = sortByRating(results);
        return sortedBars;
      })
  }

  /**
   * This should be moved to its own file but since we cant make this 
   * a legal thing im not worried anymore lololol rip 
   * @param {} lat 
   * @param {*} long 
   */
  async function getLocalCabs(lat, long) {
    return client
      .search({
        term: 'taxi',
        location: `${lat},${long}`
      })
      .then(res => {
        let cabs = [];
        for (let i = 0; i < 3; i++) {
          let company = res.jsonBody.businesses[i];
          cabs.push(company);
        }
        return cabs;
      })
      .catch(error => {
        console.log(error);
      });
  }

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

    await getUberPriceEstimates(val, res, jsonPayload.lat, jsonPayload.lng, val.coordinates.latitude, val.coordinates.longitude);
  });

  /**
   * This route is responsible for performing a search against the Uber API to
   * bring back all available rides.
   */
  app.get('/api/orderRide/uber', (req, res) => {
    axios
      .get(
        `https://api.uber.com/v1.2/estimates/price?start_latitude=${1}&start_longitude=${1}&end_latitude=${1}&end_longitude=${1}`, {
          headers: {
            Authorization: 'Bearer ' + keys.uberClientID
          }
        }
      )
      .then(res => {
        console.log('response: ' + res);
        res.send(res);
      });
  });


  /**
   *
   * @param userCurrentLat
   * @param userCurrentLong
   * @param requestedLat
   * @param requestedLong
   * @return {Promise}
   */
  async function getLyftResults(val, response, uberData, userCurrentLat, userCurrentLong, requestedLat, requestedLong) {
    const lyft = new Lyft(config.lyftClientID, config.lyftSecret);
    let cabs = await getLocalCabs(userCurrentLat, userCurrentLong);
    const query = {
      start: {
        latitude: userCurrentLat,
        longitude: userCurrentLong,
      },
      end: {
        latitude: requestedLat,
        longitude: requestedLong,
      },
      rideType: 'lyft',
    };
    lyft.getRideEstimates(query)
      .then((result) => {
        response.render('result', {
          cabs: cabs,
          val: val,
          lyftData: result.cost_estimates,
          uberData: uberData.prices,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  /**
   * getUberResults is responsible for making a call to Uber's api to retrieve
   * ride estimates for prices. It uses our unique server token in order to
   * validate with the api.
   * @param {Object} val : the values returned from a desired location, see api/search for more info
   * @param {Object} response : response object
   * @param {String} userCurrentLat : the lat the user is at 
   * @param {String} userCurrentLng : the current lng the user is at
   * @param {String} requestedLat : the requested lat from the searched location
   * @param {String} requestedLng : the requested lng from the searched location
   */
  async function getUberPriceEstimates(val, response, userCurrentLat, userCurrentLng, requestedLat, requestedLng) {
    let returnValue;
    axios.get(
        `https://api.uber.com/v1.2/estimates/price?start_latitude=${userCurrentLat}&` +
        `start_longitude=${userCurrentLng}&end_latitude=${requestedLat}&end_longitude=${requestedLng}`, {
          headers: {
            Authorization: 'Token ' + '71zCZTX54_RFpzJndt22SrpjEydNT01kuc5KRbK5'
          }
        }
      )
      .then(async res => {
        returnValue = res.data;
        getLyftResults(val, response, returnValue, userCurrentLat, userCurrentLng, requestedLat, requestedLng);
      })
      .catch(err => {
        console.log('ERROR ' + err);
      });
  }

  /**
   * Makes a request to the Yelp API conducting a general business search.
   * @param {String} term : the search keyword
   * @param lat {String} : lat
   * @param long {String} : long
   */
  async function makeRequest(term, lat, long) {
    return client
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
  }

  /**
   * Builds a location from the resulting data, and stores it in the database for the user.
   * @param {JSON} location
   * @param {String} lat: latitude of location
   * @param {String} long: longitude of location
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
        return await new Location({
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
      }
    };
    result();
  }
};
