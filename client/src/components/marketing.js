import React from 'react';

require('../styles/marketing.css');

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing-image">
        <div className="container-fluid marketing-text">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="container">
                <img src={require('../images/taxi.png')} />
                <h2> RIDR </h2>
              </div>
              <a href="/login">
                <button className="btn btn-primary blue">
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
