import { Container, Button, Row, Col } from "react-bootstrap";

const Homepage = () => {
  return (
    <div>
      {" "}
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h1>Welcome to My Website</h1>
            <p>
              This is a simple home page created with React and Bootstrap. You
              can customize it as per your needs.
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
