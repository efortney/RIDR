import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Marketing from './components/marketing';

require('./styles/main.css');


const uberSignIn = () => {
  return (
    <h4 className="text-center bottom"> Welcome </h4>
  );
};

const profile = () => {
  return (
    <h4 className="text-center">User Profile</h4>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Marketing} />
            <Route path="/home" component={uberSignIn} />
            <Route path="/profile" component={profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
