import React from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import Nav from 'react-bootstrap/Nav';

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
        <Nav.Link href="/#">Home</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
        <Nav.Link href="#project">Projects</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
      </div>
    </div>
  </nav>

  );
}


export default Header;
