import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Marketing from './components/marketing';
import login from './components/login';

require('./styles/main.css');

const Home = () => {
  return <h4 className="text-center bottom"> Welcome </h4>;
};

const profile = () => {
  return <h4 className="text-center">User Profile</h4>;
};

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/home" component={Header} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Marketing} />
            <Route path="/home/profile" component={profile} />
            <Route exact path="/login" component={login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
