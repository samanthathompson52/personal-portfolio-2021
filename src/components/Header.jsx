import React from 'react';
import useScrollPosition from '@react-hook/window-scroll';

const Header = () => {
  const scrollY = useScrollPosition()

  return (  
    <nav className={`navbar sticky-top navbar-expand-lg navbar-dark smoothscroll ${scrollY === 0 ?'':'shadow'}`}>
    <a className="navbar-brand" href="/#"><img src="logo75.png" alt="logo"></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="/#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="#about">About Me</a>
        <a className="nav-link" href="#project">Projects</a>
        <a className="nav-link" href="#experience">Experience</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  );
}


export default Header;
