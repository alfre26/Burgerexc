import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="overlay">
          <div className="hero__container">
            <h3>Welcome to</h3>
            <h1>Burgerexc</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nunc
              sit tortor augue.
            </p>

            <svg
              className="mouse-svg"
              width="70"
              height="58"
              viewBox="0 0 70 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M34.9455 0C23.592 0 14.3555 7.65312 14.3555 17.0603V40.9397C14.3555 50.3469 23.592 58 34.9455 58C46.2991 58 55.5356 50.3469 55.5356 40.9397V17.0603C55.5356 7.65312 46.2991 0 34.9455 0ZM51.3358 40.9397C51.3358 48.4277 43.9828 54.5201 34.9455 54.5201C25.9082 54.5201 18.5553 48.4277 18.5553 40.9397V17.0603C18.5553 9.57227 25.9082 3.47986 34.9455 3.47986C43.9828 3.47986 51.3358 9.57227 51.3358 17.0603V40.9397Z"
                  fill="white"
                />
                <path
                  d="M34.946 11.5378C33.7861 11.5378 32.8461 12.3167 32.8461 13.2778V21.2862C32.8461 22.2469 33.7861 23.0262 34.946 23.0262C36.1055 23.0262 37.046 22.2469 37.046 21.2862V13.2778C37.046 12.3167 36.106 11.5378 34.946 11.5378Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="70" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
