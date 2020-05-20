import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__container">
          <div className="nav__wrapper">
            <div className="nav__left">
              <ul className="nav__links">
                <li>Welcome</li>
                <li>Menu</li>
              </ul>
            </div>
            <div className="nav__logo">
              <h1>Burgerexc</h1>
            </div>
            
            <div className="nav__right">
              <ul className="nav__links">
                <li>Gallery</li>
                <li>About</li>
              </ul>
            </div>
          </div>
          <hr className="line"/>
        </div>
      </div>
    );
  }
}
