import React from 'react';
import './styles/main.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import WorkExperience from './components/workExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
}

export default App;