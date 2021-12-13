import React  from 'react';
import {NavBar, Body, Footer} from './component'
import {navBarLinks, serviceCards, footerLinks} from './data'

const navBarLink = navBarLinks
// console.log(navBarLink)


const App = () => {

  return (
    <div className="App">
      <NavBar navBarLinks={navBarLink}/>
      <Body />
      <Footer />

 
    </div>
  );
}

export default App;
