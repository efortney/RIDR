/**
 * Location component, loaded once a user types in a destination.
 */
import React, { Component } from 'react';
import axios from 'axios';

class location extends Component {
  constructor() {
    super();
    this.state = {
      locationName: '',
      locationRating: '',
      locationImage: '',
      locationOpen: '',
      locationPhone: '',
      locationCoordinates : {},
      uberResults: [],
      lyftResults: [],
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <img className="card-img-top" src={this.state.locationImage} alt="destination" />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Order Ride 
            </a>
          </div>
        </div>
      </div>
    );
  }

  getLocation() {
    console.log('getting destination');
    axios.get('/api/destination').then( res => {
      console.log(res);
      this.setState({
        locationName : res.data.name,
        locationOpen : res.data.is_closed,
        locationPhone : res.data.display_phone,
        locationImage : res.data.image,
      })
    });
    console.log(this.state.locationImage);
  }

}

export default location;
