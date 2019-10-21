import React from 'react';

import RelatedMovie from './RelatedMovie/RelatedMovie'

const RelatedMovies = (props) => {

  return (
    <>
      {props.data.map(movie => {
        return <RelatedMovie />
      })}
    </>
  );
}

export default RelatedMovies;