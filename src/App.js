import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      
      
  
    </div>
  );
}

export default App;
