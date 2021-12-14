import React  from 'react';
import {NavBar, Body, Footer} from './component'
import {navBarLinks, serviceCards, footerLinks} from './data'
import { images } from './images';
import styles from './App.module.css';

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
