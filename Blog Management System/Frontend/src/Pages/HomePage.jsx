import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      {/* Main Content */}
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h1>Welcome to My Website</h1>
            <p>
              This is a simple home page created with React and Bootstrap. You
              can customize it as per your needs.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
