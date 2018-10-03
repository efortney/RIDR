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
        <a href="/login">
          <button className="btn marketingButton blue">
            Get started
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
