import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';

// Importando los componentes //
import Header from './componentes/Header.jsx';
import CardImg from './componentes/CardImg.jsx';
import Footer from './componentes/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header className="headerGaleria" title='Galeria de Imagenes con React'></Header>
      <Container>
        <Row>
          <Col>
            <CardImg img="https://cdn.pixabay.com/photo/2022/11/15/12/23/winter-7593872_960_720.jpg" titulo="Paisaje Nieve" descripciones="Foto de Paisaje en la nieve" ></CardImg>
          </Col>
          <Col>
            <CardImg img="https://cdn.pixabay.com/photo/2022/12/01/14/46/city-7629244_960_720.jpg" titulo="Paisaje Ciudad" descripciones="Foto de Paisaje en la Ciudad" ></CardImg>
          </Col>
          <Col>
            <CardImg img="https://cdn.pixabay.com/photo/2022/11/19/09/35/forest-7601671_960_720.jpg" titulo="Paisaje Puesta Sol" descripciones="Foto de Paisaje de una Puesta de Sol" ></CardImg>
          </Col>
        </Row>
      </Container>
      <Footer texto="TODOS LOS DERECHOS RESERVADOS @2022 WHOISCHIPI"></Footer>
    </div>
  );
}

export default App;
