import React from 'react';
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import './css/main.css'

function App() {
  return (
    <div className='main-container'>
      <Header />
      <About />
      <Projects />

    </div>
  );
}

export default App;
