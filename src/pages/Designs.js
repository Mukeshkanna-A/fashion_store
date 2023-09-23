import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Designs.css";
import Card from "react-bootstrap/Card";
import dressmaker from '../images/dressmaker.png';
import fashiondesign from '../images/fashiondesign.png';
import clothes from '../images/clothes.png';

function Designs() {
  return (
    <Container fluid className="designs_container">
      <Row>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card style={{ width: "100%",marginTop:"1rem"}} className="design_card">
            <Card.Body>
            <Card.Img variant="top" src={dressmaker} style={{width:"100%",height:"25rem"}} />
              <Card.Title style={{fontWeight:"bold",textAlign:"center",margin:"1rem"}}>Wide Variety of Styles</Card.Title>
              <Card.Text style={{padding:"0.5rem",fontWeight:"bold"}}>
              Offering a diverse range of clothing styles, from casual to formal, and catering to different tastes and preferences can be a key feature. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card style={{ width: "100%",marginTop:"1rem"}} className="design_card">
            <Card.Body>
            <Card.Img variant="top" src={fashiondesign} style={{width:"100%",height:"25rem"}}/>
              <Card.Title style={{fontWeight:"bold",textAlign:"center",margin:"1rem"}}>Excellent Customer Service</Card.Title>
              <Card.Text style={{padding:"0.5rem",fontWeight:"bold"}}>
              Providing exceptional customer service, including responsive support, easy returns, and helpful sizing guides, can set your store apart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card style={{ width: "100%",marginTop:"1rem"}} className="design_card">
            <Card.Body>
            <Card.Img variant="top" src={clothes} style={{width:"100%",height:"25rem"}}/>
              <Card.Title style={{fontWeight:"bold",textAlign:"center",margin:"1rem"}}>Awesome Shopping Experience</Card.Title>
              <Card.Text style={{padding:"0.5rem",fontWeight:"bold"}}>
              Tailoring product suggestions based on individual preferences and past purchases can help customers discover items they love.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Designs;
