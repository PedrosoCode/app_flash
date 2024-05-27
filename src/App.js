import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Container fluid style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mais" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
