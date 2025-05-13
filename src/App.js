import React from 'react';
import './src/styles/main.css';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import WorkExperience from './src/components/WorkExperience';
import Footer from './src/components/Footer';

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