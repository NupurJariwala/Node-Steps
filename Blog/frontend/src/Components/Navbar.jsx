import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Blogs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">BlogList</Nav.Link>
            <Nav.Link href="/create">BlogCreate</Nav.Link>
            <Nav.Link href="/details">BlogDetails</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navigation;
