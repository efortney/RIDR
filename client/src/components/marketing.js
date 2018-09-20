import React from 'react';
import taxi from '../images/taxi.png';

require('../styles/marketing.css');

const Marketing = () => {
  return (
    <div className="marketing">
    <div className="marketing-image">
    <div className="container-fluid marketing-text">
    <div className="row">
      <div className="col-md-12 text-center">
      <div className="container">
      <img src={taxi} />
      <h2> RIDR </h2>
       </div>
        <a href="/signUp">
          <button className="btn btn-primary marketingButton blue">
            Sign Up
          </button>
        </a>
        <a href="/auth/google">
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
