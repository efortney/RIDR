import React from 'react';

const Header = () => {
  return (
    <div className='navbarClear'>
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home">
        <i className="material-icons">home</i>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home/profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Header;
