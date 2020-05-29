import React, { Component } from "react";
//components
import Carousel from "./Carousel";

export default class Feedback extends Component {
  render() {
    return (
      <div className="feedback">
        <div className="feedback__container">
          <h1>Service Feed</h1>
          <Carousel />
        </div>
      </div>
    );
  }
}
