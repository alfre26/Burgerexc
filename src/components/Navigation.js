import React, { Component, Fragment } from "react";

import Sidebar from "./Sidebar";

export default class Navigation extends Component {
  state = {
    active: false,
    sidebar: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };

  //Sticky navegation
  handleScroll = () =>
    window.scrollY === 0
      ? this.setState({ active: false })
      : this.setState({ active: true });

  render() {
    return (
      <Fragment>
        <div className={this.state.active ? "nav active" : "nav"}>
          <div className="nav__container">
            <div className="nav__wrapper">
              <div className="nav__left">
                <ul className="nav__links">
                  <li>Welcome</li>
                  <li>Menu</li>
                </ul>
              </div>
              <div className="hamburger" onClick={this.handleSidebar}>
                <div className="lines"></div>
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
            <hr className={this.state.active ? "line active" : "line"} />
          </div>
        </div>

        <Sidebar clase={this.state.sidebar} handleClose={this.handleSidebar} />
      </Fragment>
    );
  }
}
