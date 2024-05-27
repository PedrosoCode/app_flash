import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center mb-3">
            <h5>Siga-nos</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaInstagram size={30} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaWhatsapp size={30} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Flash Transportes. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
