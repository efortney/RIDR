import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Marketing from './components/marketing';
import Profile from './components/profile';

require('./styles/main.css');

const Home = () => {
  return <h4 className="text-center bottom"> Welcome </h4>;
};

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Marketing} />
            <Route path="/home/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
