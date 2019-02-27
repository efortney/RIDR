import React from 'react';

const Header = () => {
  return (
    <div className="navbarClear">
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img height="30px" src={require('../images/RIDRLOC.png')} />
          RIDR
        </a>

      </nav>
    </div>
  );
};

export default Header;
