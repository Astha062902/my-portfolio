import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
//import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
