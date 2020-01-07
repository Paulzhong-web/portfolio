import React, { Component } from 'react'
import NavBar from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Education />
      </section>
    )
  }
}

export default App

