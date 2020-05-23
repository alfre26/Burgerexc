import React, { Component } from "react";
//components
import Carousel from './Carousel'

export default class Feedback extends Component {
  render() {
    return (
      <div className="feedback">
        <div className="feedback__container">
          <h1>Service Feed</h1>
            <Carousel/>          
          
          <img className="tomato" src="../img/tomato.svg"  alt="img"/>
          <img className="tomato2" src="../img/tomato-2.svg" alt="img" />
          <img className="fries" src="../img/fries.svg" alt="img" />
          <img className="fries2" src="../img/fries-2.svg"  alt="img"/>
          <img className="burger" src="../img/burger.svg" alt="img" />
          <img className="burger2" src="../img/burger2.svg" alt="img" />

        </div>
      </div>
    );
  }
}
