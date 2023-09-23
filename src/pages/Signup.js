import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Login.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import image from "../images/Signup_img.jpg";
import Button from 'react-bootstrap/Button';

function Signup() {
  return (
    <Container fluid className="login_container">
      <Row>
        <Col className="column" xs={12} sm={12} md={12} lg={12}>
          <Card
            style={{ width: "70%", marginTop: "1rem", marginBottom: "1rem" }}
            className="login_card"
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "1rem",
                }}
              >
                Sign up
              </Card.Title>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button variant="dark" type="submit" style={{margin:"1rem"}}>
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
