import React from 'react';
import Navbar from './components/navbar'
import TextHeading from './components/heading';
import TwoColumnLayout from './components/TwoColumnLayout';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextHeading /> 
      <TwoColumnLayout />
      <Footer />
    </div>
  );
}

export default App;
