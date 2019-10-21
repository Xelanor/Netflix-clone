import React from 'react';
import { Link } from 'react-router-dom'

import './MovieBox.css'

const MovieBox = (props) => {
  return (
    <Link to="/izle?f=123asdf235123">
      <div className="mr-1 mb-6" style={{ width: "210px" }}>
        <div className="flex relative inline-block" style={{ width: "210px", height: "124px" }}>
          <img src="https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfjWZT0nq_NRhPPPiJMeyDpO1zNw" />
        </div>
        {/* <div className="flex relative inline-block" style={{ width: "210px", height: "124px" }}>
          <img src="https://i.ytimg.com/an_webp/wmiIUN-7qhE/mqdefault_6s.webp?du=3000&sqp=CMTDsO0F&rs=AOn4CLAOcWAdZrqGOimx4qUUqx6uh2nadg" />
        </div> */}
        <div>
          <div title="asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf" className="flex mt-2 mb-1 text-white text-2xl font-medium movie-desc">
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

export default MovieBox;