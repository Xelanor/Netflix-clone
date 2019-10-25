import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './containers/HomePage/HomePage'
import LoginScreen from './containers/LoginScreen/LoginScreen'
import Navbar from './components/Layout/Navbar/Navbar'
import MoviePage from './containers/MoviePage/MoviePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/izle" component={MoviePage} />
        </div>
      </Router>
    );
  }
}

export default App;
