import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Marketing from './components/marketing';

import Profile from './components/profile'
import Map from './components/Map';
import SearchBar from './components/searchbar';
require('./styles/main.css');

/**
 * Main App class. All user interactions will take place within this clas
 * Routes are added using the react router interface
 */
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route exact path="/" component={Map} />
            <Route path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
