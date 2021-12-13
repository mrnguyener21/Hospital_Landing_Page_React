import React  from 'react';
import {NavBar, Body, Footer} from './component'
import {navBarLinks, serviceCards, footerLinks} from './data'
// import magnifyingGlass from './images/magnifyingGlass.svg'
import { images } from './images';
const App = () => {

  return (
    <div className="App">
      <NavBar navBarLinks={navBarLinks} images={images}/>
      <Body serviceCards={serviceCards}/>
      <Footer footerLinks={footerLinks} />

 
    </div>
  );
}

export default App;
