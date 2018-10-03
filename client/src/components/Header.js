import React from 'react';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="black nav-wrapper">
          <a href="/home" className="brand-logo">
            <span className="homeText logo">RIDR </span>
          </a>
          <ul className="right">
            <li>
              <a href="/home/profile">
                <i className="material-icons profileLink">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
