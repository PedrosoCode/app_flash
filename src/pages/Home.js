import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <>
      <div style={rectangleStyle}>
        <div style={titleStyle}>Flash Transportes</div>
      </div>
      <div style={videoContainerStyle}>
        <video style={videoStyle} autoPlay loop muted>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center mt-5" style={{ position: 'relative', zIndex: 2 }}>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Esta é a página principal do seu site.</p>
        <Button variant="primary" onClick={navigateToAbout} className="mt-3">
          Ir para About
        </Button>
      </div>
    </>
  );
}

const rectangleStyle = {
  position: 'relative',
  width: '100%',
  height: '50vh',
  background: 'linear-gradient(135deg, lightgrey 50%, darkgrey 50%)',
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
  zIndex: 0,
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
