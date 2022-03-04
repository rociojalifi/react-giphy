import React, { Component } from "react";
import Gif from "./gif.jsx";

class GifList extends Component {
  renderList = () => {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
