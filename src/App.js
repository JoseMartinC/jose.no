import React, { Component } from 'react';
import AboutMe from './Custom/AboutMe'
import Education from './Custom/Education'
import Work from './Custom/Work'
import Skills from './Custom/Skills'
import './Styles/stylesheets/style.css';

class App extends Component {
  render() {
    return (
    <div className="main-wrapper">
      <AboutMe />
      <Education />
      <Work />
      <Skills />
    </div>
    )
  }
}

export default App;
