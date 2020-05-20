import React, {Fragment} from 'react';


//Components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Feedback from './components/Feedback'
import Reservation from './components/Reservation'
import Footer from './components/Footer'



function App() {
  return (
    <Fragment>
        <Navigation/>
        <Hero/>
        <Menu/>
        <Feedback/>
        <Reservation/>
        <Footer/>
    </Fragment>
  );
}

export default App;
