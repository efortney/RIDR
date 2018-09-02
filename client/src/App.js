import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
        <Route exact path="/home" component={Header} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
