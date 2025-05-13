import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
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