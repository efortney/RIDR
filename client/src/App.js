import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Marketing from './components/marketing';
import Profile from './components/Profile';
import Map from './components/Map';
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
            <Route path="/home" component={Header} />
            <div className="container-fluid">
              <div className="row">
                <Route exact path="/home" component={Map} />
              </div>
            </div>
            <Route exact path="/" component={Marketing} />
            <Route path="/home/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
