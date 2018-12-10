import React, { Component } from 'react';
import axios from 'axios';
import Destination from '../scripts/Destination';
const key =
  'Wwl2uAr5ECJodlKe82OKdteOiMOpYVd6Sh937pCTz8GRjnsUu37vkw81Ky-GIzb_sOpacgKSWgypGC58h_C0oyx6OxrQntgFDjlO1KZw9iDTd6NqDZIYdy-JfSr_W3Yx';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <form>
        <div>
          <input
            className="form-control"
            placeholder="Where to?"
            value={this.state.query}
            onChange={event => this.changeText(event.target.value)}
            onSubmit={event => this.getYelpResults(event.target.value)}
          />
        </div>
      </form>
    );
  }

  // updates the text in the search bar as the user types
  changeText(query) {
    this.setState({ query });
  }

  /**
   * Using Axios, we are setting the api key in the header, then making a request to the Yelp API
   * @param {String} query
   */
  getYelpResults(query) {
    this.setState({ query });
    console.log(query);
    const baseURL =
      'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972';
    axios.defaults.headers[`Authorization: Bearer ${key}`];
    axios.get(`${baseURL}`).then((err, res) => {
      console.log('TEST');
    });
  }
}

export default SearchBar;
