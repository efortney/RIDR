import React from 'react';
import taxi from '../images/taxi.png';

require('../styles/marketing.css');

const Marketing = () => {
  return (
    <div className="marketing">
    <div className="marketing-image">
    <div className="container-fluid marketing-text">
    <div className="row">
      <div className="col-md-12 text-center" />
      <div className="container">
      <img src={taxi} />
        <h5>
          Go wherever you want, however you want with RIDR. Choose from
          UBER, Lyft, and local cab companies to find the best options
          available to you.
        </h5>
        <a href="/signUp">
          <button className="btn btn-primary marketingButton blue">
            Sign Up
          </button>
        </a>
        <a href="/login">
          <button className="btn btn-danger marketingButton green">
            Login
          </button>
        </a>
      </div>
    </div>
  </div>
      </div>

    </div>
  );
};

export default Marketing;
