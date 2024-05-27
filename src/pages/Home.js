import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="text-center mt-5">
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Esta é a página principal do seu site.</p>
      <Button variant="primary" onClick={navigateToAbout}>
        Ir para About
      </Button>
    </div>
  );
}

export default Home;
