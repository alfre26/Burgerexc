import React, { Component } from "react";

export default class Sidebar extends Component {
  // handleClose = (e) => {
  //   this.props.clase = false;
  // };
  handleDefault = (e) => {
    e.preventDefault();
  };
  message = () => {
    alert("working");
  };

  render() {
    return (
      <div>
        <div
          className={this.props.clase ? "sidebar-bg openSidebar" : "sidebar-bg"}
        >
          <div className="sidebar">
            <button
              onClick={this.props.handleClose.bind(this)}
              className="close"
            >
              <i class="close fas fa-times"></i>
            </button>

            <a onClick={this.handleDefault} href="/">
              Welcome
            </a>
            <a onClick={this.handleDefault} href="/">
              Menu
            </a>
            <a onClick={this.handleDefault} href="/">
              Gallery
            </a>
            <a onClick={this.handleDefault} href="/">
              About
            </a>
          </div>
        </div>
      </div>
    );
  }
}
