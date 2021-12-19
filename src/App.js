import React  from 'react';
import {NavBar, Welcome, Body, Footer} from './component'
import {navBarLinks, serviceCards, footerLinks, socialMediaImages} from './data'
import { images } from './images';
import styles from './App.module.css';

const App = () => {

  return (
    <div className="App">
      <NavBar navBarLinks={navBarLinks} images={images}/>
      <Welcome images={images}/>
      <Body serviceCards={serviceCards}/>
      <Footer footerLinks={footerLinks} images={images} socialMediaImages={socialMediaImages} />


    </div>
  );
}

export default App;
