import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import work from './work.json';
import '../styles/Experience.css';

const Experience = () => {
  const [selected, setSelected] = useState(work[0]);

  const workList = work.map((elm) => {
    const className = elm.id === selected.id ? 'selected' : '';
    return (
      <div key={elm.id} className={className}>
        <button type="button" className="btn click" onClick={() => { setSelected(elm); }}>
          <span>{elm.position}</span>
        </button>
      </div>
    );
  });

  const workBullets = selected.description.map((elm, key) => (
    <li key={`bullet${key}`}>
      {elm}
    </li>
  ));

  return (
    <div id="experience" className="break section">
      <Container fluid>
        <h4 className="mb-4 w-100 dotted-line">Experience</h4>
        <Row>
          <Col md={4} lg={3} className="py-2">
            <div className="buttonContainer">
              {workList}
            </div>
          </Col>
          <Col md={8} className="py-2">
           
              <span className = "experience">{selected.position}</span>
              
              <span className ="experience">
                 {' '}
               -
                {' '}{selected.company}</span>
        
            <div className = "workdates">{selected.dates}</div>
            <div>
              <ul><h5>
                {workBullets}
                </h5>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
