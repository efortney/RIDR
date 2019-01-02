/**
 * Location component, loaded once a user types in a destination.
 */
import React, { Component } from 'react';

class location extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default location;
