import React from 'react';
import mail from '../pictures/mail.png'
import phone from '../pictures/phone.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
    <div className = "section">
        <Container fluid> 
          <div className="text-left"> 
            <h4>Contact Me</h4>
            <h8>Let's Talk!</h8>
            <Container fluid>
              <Row>
                <Col xs={12} className="d-flex align-items-center">
                  <img src={mail} alt="mail"></img>
                  <h5>SamanthaThompson521@gmail.com</h5>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex align-items-center">
                  <img src = {phone} alt="phone"></img>
                  <h5>(219) 617-6266</h5>
                </Col>
              </Row>
            </Container>
            <span id = 'contact'></span>
          </div>
        </Container>
    </div>
  );
}

export default Home;
