import React from 'react';
import useScrollPosition from '@react-hook/window-scroll';

const Header = () => {
  const scrollY = useScrollPosition()

  return (  
    <nav class={`navbar sticky-top navbar-expand-lg navbar-dark ${scrollY == 0 ?'':'shadow'}`}>
    <a class="navbar-brand" href="#"><img src="logo75.png"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#about">About Me</a>
        <a class="nav-link" href="#project">Projects</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  

  );
}


export default Header;