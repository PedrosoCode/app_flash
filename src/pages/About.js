import React from 'react';
import { Button, Card, ListGroup, Container, Row, Col } from 'react-bootstrap';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import './About.css'; // Certifique-se de criar este arquivo CSS

function About() {
  return (
    <>
      <MyNavbar />
      <Container className="text-center mt-5">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à Flash Transportes! Somos uma empresa dedicada ao fornecimento de serviços de transporte de alta qualidade, atuando no mercado há mais de 15 anos. Nossa missão é garantir a satisfação dos nossos clientes através de soluções de transporte eficientes, seguras e confiáveis.
        </p>
        <p>
          Desde a nossa fundação, temos nos esforçado para ser a escolha número um para transporte de passageiros e cargas em nossa região. Oferecemos uma ampla gama de serviços, incluindo transporte para aeroportos, viagens corporativas, entrega de encomendas e documentos, e transporte de materiais de consultório. Independentemente das suas necessidades de transporte, estamos aqui para atendê-lo com profissionalismo e dedicação.
        </p>
        <p>
          <strong>Nossa História</strong>
        </p>
        <p>
          Ao longo dos anos, construímos uma reputação sólida baseada na confiança e na excelência. Começamos como uma pequena empresa familiar, com apenas um veículo, e hoje, possuímos uma frota moderna e diversificada que atende a diferentes demandas e preferências de nossos clientes. Nosso crescimento é um reflexo direto do nosso compromisso com a qualidade e a melhoria contínua.
        </p>
        <p>
          <strong>Nossos Valores</strong>
        </p>
        <p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><strong>Qualidade</strong>: Buscamos constantemente melhorar nossos serviços e oferecer a melhor experiência possível para nossos clientes.</li>
            <li><strong>Segurança</strong>: A segurança dos nossos passageiros e mercadorias é nossa prioridade. Todos os nossos veículos passam por manutenção regular e nossos motoristas são treinados para conduzir com responsabilidade.</li>
            <li><strong>Confiabilidade</strong>: Entendemos a importância da pontualidade e da confiança. Estamos sempre prontos para cumprir nossos compromissos com precisão.</li>
            <li><strong>Atendimento ao Cliente</strong>: Nossa equipe de atendimento ao cliente está disponível para ajudá-lo com qualquer dúvida ou necessidade que você possa ter.</li>
          </ul>
        </p>
        <h2 className="mt-5">Nossos Serviços</h2>
        <Card className="mt-4">
          <Card.Header as="h2">Informações de Contato</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Horários de Funcionamento:</strong> 08:00 - 18:00</ListGroup.Item>
            <ListGroup.Item><strong>Dias da Semana:</strong> Segunda - Sexta</ListGroup.Item>
            <ListGroup.Item><strong>Endereço:</strong> Rua Exemplo, 123, Bairro Exemplo, Cidade, Estado, CEP 12345-678</ListGroup.Item>
          </ListGroup>
        </Card>
        <Button
          variant="success"
          size="lg"
          className="mt-4"
          href="https://wa.me/seunumerodetelefone"
          target="_blank"
        >
          Entre em Contato Conosco via WhatsApp
        </Button>
        <h2 className="mt-5">Nossa Empresa</h2>
        <Row className="mt-4 d-flex">
          <Col md={4} className="d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Body>
                <Card.Title>Missão</Card.Title>
                <Card.Text>
                  Nossa missão é garantir a satisfação dos nossos clientes através de soluções de transporte eficientes, seguras e confiáveis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Body>
                <Card.Title>Visão</Card.Title>
                <Card.Text>
                  Ser a escolha número um para transporte de passageiros e cargas na região, reconhecida pela qualidade e excelência dos nossos serviços.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Body>
                <Card.Title>Valores</Card.Title>
                <Card.Text>
                  Qualidade, Segurança, Confiabilidade, Atendimento ao Cliente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Footer />
    </>
  );
}

export default About;
