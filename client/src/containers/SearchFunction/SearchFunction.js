import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class SearchFunction extends Component {
  state = {}
  render() {
    return (
      <div className="text-sm lg:flex-grow">
        <form>
          <input
            type="search"
            className={this.props.class}
            placeholder="Deneyim Bul..."
          />
          <button type="submit">
            <i style={{ color: "#F67e7d" }} className="fa fa-search ml-1 p-2"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchFunction;