import React from 'react';
import { Link } from 'react-router-dom'

import './RelatedMovie.css'

const RelatedMovie = (props) => {
  return (
    <Link to="/izle?f=123asdf235123">
      <div className="flex mr-1 mb-6">
        <div className="flex relative inline-block mr-2 related-movie">
          <img src="https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfjWZT0nq_NRhPPPiJMeyDpO1zNw" />
        </div>
        <div className="flex-1">
          <div title="asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf" className="flex text-white mb-4 text-xl xl:text-2xl font-medium movie-desc">
            asdfasdf asdfasdf asdfasdf asdasfas asfa s asdgasdgsdgasd asdgasdg
          </div>
          <div>
            <div className="flex text-clone4 text-lg font-normal">
              2018
            </div>
            <div className="flex text-clone4 text-lg font-normal">
              120 Görüntülenme
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RelatedMovie;