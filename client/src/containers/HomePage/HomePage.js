import React, { Component } from 'react';

import MovieBoxes from '../../components/MovieBoxes/MovieBoxes'

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div className="container px-4 lg:px-0">
        <div className="flex pt-32 text-white text-4xl font-normal justify-center xl:justify-start">
          Yeni
        </div>
        <div className="flex mt-12">
          <MovieBoxes movies={["1", "2", "3", "1", "2", "3"]} />
        </div>
        <div className="flex mt-20 text-white text-4xl font-normal justify-center xl:justify-start">
          Popüler
        </div>
        <div className="flex mt-12">
          <MovieBoxes movies={["1", "2", "3", "1", "2", "3"]} />
        </div>
        <div className="flex mt-20 text-white text-4xl font-normal justify-center xl:justify-start">
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