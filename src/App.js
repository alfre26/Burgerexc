import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

//Components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Feedback from "./components/Feedback";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Menu />
        <Feedback />
        <Reservation />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
