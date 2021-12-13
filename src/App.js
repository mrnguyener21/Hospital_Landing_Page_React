import React  from 'react';
import {NavBar, Body, Footer} from './component'
import {navBarLinks, serviceCards, footerLinks} from './data'

const App = () => {

  return (
    <div className="App">
      <NavBar navBarLinks={navBarLinks}/>
      <Body serviceCards={serviceCards}/>
      <Footer footerLinks={footerLinks} />

 
    </div>
  );
}

export default App;
