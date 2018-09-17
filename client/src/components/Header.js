import React from 'react';

require('../styles/header.css');

const Header = () => {
  return (
    <div>
      <nav>
        <div className="black nav-wrapper">
          <a href="/" className="brand-logo">
           <span className="homeText logo">RIDR </span>
          </a>
          <ul className="right">
            <li>
              <a href="/profile">
                <i className="material-icons">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
