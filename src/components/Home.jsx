import React from 'react';
import '../styles/App.css';

import Container from 'react-bootstrap/Container'


const Home = () => {
  return (
    
 <div>
    <div className = "App-landingtop">
        <Container fluid>
          <div className = "p-4">   
            <h1>Samantha Thompson</h1>
            <h2>Aspiring Software Developer</h2>
            <h3 className = "py-3">Learning about the power of technology and the impact it can have on the world.</h3>
          </div>
          <span id= 'about'></span>
        </Container>
    </div>
</div>
  );
}

export default Home;
