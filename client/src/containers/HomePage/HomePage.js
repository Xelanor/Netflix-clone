import React, { Component } from 'react';

import MovieBoxes from '../../components/MovieBoxes/MovieBoxes'

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="flex pt-32 text-white text-4xl font-normal">
          Yeni
        </div>
        <div className="flex mt-12">
          <MovieBoxes movies={["1", "2", "3", "1", "2", "3"]} />
        </div>
        <div className="flex mt-20 text-white text-4xl font-normal">
          Popüler
        </div>
        <div className="flex mt-12">
          <MovieBoxes movies={["1", "2", "3", "1", "2", "3"]} />
        </div>
        <div className="flex mt-20 text-white text-4xl font-normal">
          Yükselenler
        </div>
        <div className="flex mt-12">
          <MovieBoxes movies={["1", "2", "3", "1", "2", "3"]} />
        </div>
      </div>
    );
  }
}

export default HomePage;