import axios from "axios";
import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [err, seterr] = useState(false);
  const handleclick = () => {
    axios
      .get("http://localhost:8080/user/logout", { withCredentials: true })
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handledelete = () => {
    axios
      .delete("http://localhost:8080/notes/deletebyadmin", {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        seterr(true);
        console.log(err);
      });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">MyWebsite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createnotes">create</Nav.Link>
            <Nav.Link href="/notes">Notes</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/allnotes">AllNotes</Nav.Link>
            <Button variant="primary" className="ms-2">
              <Link style={{ color: "black" }} to={"/login"}>
                Login
              </Link>
            </Button>
            <Button variant="primary" onClick={handleclick} className="ms-2">
              Logout
            </Button>
            <Button ariant="primary" onClick={handledelete} className="ms-2">
              DeleteAllNotes
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
