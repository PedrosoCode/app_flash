import React from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import MyNavbar from '../components/MyNavbar';

function Home() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/mais');
  };

  return (
    <>
    <MyNavbar />
      <div style={videoContainerStyle}>
        <video style={videoStyle} autoPlay loop muted>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={rectangleStyle}>
          <div style={titleStyle}>Flash Transportes</div>
        </div>
      </div>
      <div className="text-center mt-5" style={{ position: 'relative', zIndex: 2 }}>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Você pode encontrar mais informações de contato ou sobre nosso funcionamento no botão abaixo</p>
        <Button variant="primary" onClick={navigateToAbout} className="mt-3">
          Sobre Nós
        </Button>
      </div>
      <div className="container mt-5">
        <Card>
          <Card.Header as="h2" className="text-center">Nossos Serviços</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item action>Viagens</ListGroup.Item>
            <ListGroup.Item action>Aeroporto</ListGroup.Item>
            <ListGroup.Item action>Faculdade</ListGroup.Item>
            <ListGroup.Item action>Encomendas</ListGroup.Item>
            <ListGroup.Item action>Material de Consultório</ListGroup.Item>
            <ListGroup.Item action>Documentos</ListGroup.Item>
            <ListGroup.Item action>Outros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <br></br><br></br>
      <Footer />
    </>
  );
}

const rectangleStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(169, 169, 169, 0.5)', // lightgrey com transparência
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
};

const titleStyle = {
  color: '#fff',
  fontSize: '48px',
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  zIndex: 2
};

const videoContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '50vh',
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
};

const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.5)'
};

export default Home;
