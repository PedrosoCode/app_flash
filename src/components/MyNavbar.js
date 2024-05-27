import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="/imgs/logo.png" // Ajuste o caminho da sua logo
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/mais">Mais Informações</Nav.Link>
        </Nav>
        <Nav className="ml-auto d-flex">
          <Nav.Link href="https://wa.me/seunumerodetelefone" target="_blank">
            <FaWhatsapp size={24} color="white" />
          </Nav.Link>
          <Nav.Link href="https://instagram.com/seuperfil" target="_blank">
            <FaInstagram size={24} color="white" />
          </Nav.Link>
          <Nav.Link href="https://facebook.com/seuperfil" target="_blank">
            <FaFacebook size={24} color="white" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
