import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Destination from '../scripts/Destination';
const key =
  'Wwl2uAr5ECJodlKe82OKdteOiMOpYVd6Sh937pCTz8GRjnsUu37vkw81Ky-GIzb_sOpacgKSWgypGC58h_C0oyx6OxrQntgFDjlO1KZw9iDTd6NqDZIYdy-JfSr_W3Yx';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      location : props.location,
    };

    this.location = props.location;
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form
        method="post"
        action="/api/search"
        onSubmit={this.handleSubmit}
      >
      <input className="" type="hidden" name="lat" value={this.location.lat} />
      <input className="" type="hidden" name="long" value={this.location.lng} />
        <input
        className="form-control"
          placeholder="Where to?"
          name="destination"
          value={this.state.query}
          onChange={event => this.handleChange(event.target.value)}
        />
      </form>
    );
  }

  handleChange(event) {
    this.setState({ query: event });
  }

}

export default SearchBar;
