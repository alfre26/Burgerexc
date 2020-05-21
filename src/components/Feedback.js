import React, { Component } from "react";

//components
import Card from './Card'

export default class Feedback extends Component {
  render() {
    return (
      <div className="feedback">
        <div className="feedback__container">
          <h1>Service Feed</h1>
          <div className="card_container">
            <Card fecha ={"25-april-2020"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."}/>
            <Card fecha ={"01-april-2020"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."}/>
            <Card fecha ={"10-may-2020"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."}/>
            <Card fecha ={"15-june-2020"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."}/>
          </div>

        

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
