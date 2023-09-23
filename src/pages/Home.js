import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../images/Home_img.jpg';
import "../Home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container fluid className='home_container' >
      <Row>
        <Col className='column1' xs={12} sm={12} md={6} lg={6}>
        <h2 className='homepage_header'>Discover the Art of Fashion: Shop Now!</h2>
        <p className='homepage_paragraph'>"Step into a world of fashion where self-expression knows no bounds."Our fashion store is your playground for exploring the latest trends, timeless classics, and everything in between.</p>
        <Button className="home_btn" variant='dark'>
              <Link to="/designs" className="p-1" style={{color:"white",textDecoration:"none"}}>
                Browse our designs
              </Link>
        </Button>
        </Col>
        <Col className='column2' xs={12} sm={12} md={6} lg={6}>
          <img src={image} alt="" style={{width:"100%",height: "37rem",borderRadius:"10rem"}}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;