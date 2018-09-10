import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';

const homePage = () => {
  return (
    <h4> HOME PAGE </h4>
  );
};

const uberSignIn = () => {
  return (
    <h4> You did an Oauth yay </h4>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={homePage} />
            <Route path="/home" component={uberSignIn} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
