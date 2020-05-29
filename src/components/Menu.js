import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__container">
          <div className="left_side"></div>
          <div className="right">
            <div className="carta">
              <div className="contenido">
                <h1>menu</h1>
                <ul>
                  <li>
                    <div className="description">
                      <h3>Mega Burger</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                    </div>
                    <h3 className="price">RD$ 100</h3>
                  </li>
                  <li>
                    <div className="description">
                      <h3>Mega Burger</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                    </div>
                    <h3 className="price">RD$ 100</h3>
                  </li>
                  <li>
                    <div className="description">
                      <h3>Mega Burger</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                    </div>
                    <h3 className="price">RD$ 100</h3>
                  </li>
                  <li>
                    <div className="description">
                      <h3>Mega Burger</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                    </div>
                    <h3 className="price">RD$ 100</h3>
                  </li>

                  <li>
                    <div className="description">
                      <h3>Mega Burger</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                    </div>
                    <h3 className="price">RD$ 100</h3>
                  </li>

                  <li>
                    <div className="description">
                      <h3>Mega Burger</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                    </div>
                    <h3 className="price">RD$ 100</h3>
                  </li>
                </ul>
              </div>
              <div className="btnMenu">
                <Link to="/menu" className="link active">
                  View menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
