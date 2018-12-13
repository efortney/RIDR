/**
 * Yelp Fusion API tie in
 *
 * @author: Elliot Fortney
 */

const axios = require('axios');
const yelp = require('yelp-fusion');
const apiKey = require('../../config/keys').yelp;
const client = yelp.client(apiKey);
//
module.exports = {
  /**
   * Makes a request to the API conducting a general business search.
   * @param {String} term : the search keyword
   * @param {String} location : the location the search is being conducted in
   */
makeRequest(term, lat, long) {
    console.log(`${lat},${long}`);
    client
      .search({
        term: term,
        location: `${lat},${long}`
      })
      .then(res => {
        let resultingBusiness =res.jsonBody.businesses[0];
        console.log(resultingBusiness);
        return resultingBusiness;
      })
      .catch(error => {
        console.log(error);
      });
  }, 

};
