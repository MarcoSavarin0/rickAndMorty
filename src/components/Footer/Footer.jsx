import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return(
        <footer className="bg-light footer" style={{ position: 'relative', bottom: 0, left: 0, right: 0 }}>
      <Container className="py-4">
        <Row>
          <Col>
            <p className="text-muted mb-0">CREADO POR MARCO SAVARINO-2023</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <button
              className="btn btn-primary btn-sm rounded-pill shadow-sm"
              onClick={handleScrollToTop}
            >
              <FontAwesomeIcon icon={faArrowUp} className="me-2" />
              Subir
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
    
}

export default Footer