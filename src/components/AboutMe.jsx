import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/About.css';

const AboutMe = () => {
  return (  
    <div>
      <div className = "about-me text-left">
        <Container fluid className="border-line py-4">
          <Row>    
            <Col md={4} lg={3} className="d-none d-md-block"> 
            <div className="bg-image bg-image-wedding">
            </div>
            </Col> 
            <Col xs={12} md={8} lg={9} className="d-flex align-items-start">
              <div className = "px-4">  
                <h4>About Me</h4>
                <h5> Neurobiology & Physiology graduate searching for an opportunity to grow and discover new technology. </h5>
                <h5> Throughout my undergraduate education I found myself gaining new experiences in clinical, research, and academia areas of biology. During this, I realized how much of an impact technology can have on healthcare and research.</h5>
                <h5> It has become my passion to combine my knowledge of biology and computer science to create advancements to healthcare and science. Even after graduation, I am actively improving my own knowledge of programming.</h5>
                <div className = "py-4"> 
                  <a href = "/Resume.pdf" target = "_blank"><button type="button" className="btn btn-primary raised btn-block">Resume</button></a>
                </div>
              </div> 
            </Col>
          </Row>
        </Container>
        <span id='project'></span>
      </div>
    </div>
  );
}

export default AboutMe;
