import React from 'react';

import MovieBox from './MovieBox/MovieBox'

const MovieBoxes = (props) => {
  let data = props.movies
  let movies = data.map(movie => {
    return <MovieBox />
  })
  return (
    <div className="flex flex-wrap">
      {movies}
    </div>
  );
}

export default MovieBoxes;