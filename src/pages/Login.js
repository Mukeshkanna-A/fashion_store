import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Login.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import image from "../images/Signup_img.jpg";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function Login() {
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
                Login
              </Card.Title>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button
                variant="primary"
                type="submit"
                style={{ margin: "1rem" }}
              >
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
