import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="rating">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>{this.props.fecha}</p>
        </div>

        <p className="comment">{this.props.text}</p>
      </div>
    );
  }
}
