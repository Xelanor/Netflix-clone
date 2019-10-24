import React, { Component } from 'react';
import queryString from 'query-string'
import { Link } from 'react-router-dom'

import Movie from '../../components/Movie/Movie'
import MovieDescription from '../../components/MovieDescription/MovieDescription'
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies'

import './MoviePage.css'

class MoviePage extends Component {
  state = {
    movieId: null
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.setState({ movieId: values.f })
  }

  render() {
    return (
      <>
        <div className="flex-1 pt-32 xl:flex pr-2 lg:px-0">
          <div id="primary" className="flex xl:w-full ml-8 xl:ml-40 mr-6">
            <Movie />
          </div>
          <div id="related" className="flex-1 mr-6 xl:mr-40 r-0 ml-8 xl:ml-0 mt-16 xl:mt-0">
            <div className="text-white mb-2 text-4xl font-normal">
              Öneriler
            </div>
            <div className="related-video">
              <RelatedMovies data={[1, 2, 3, 4, 5, 6, 7]} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoviePage;