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
            <Nav.Link href="/createblogs">create</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/allblogs">AllBlogs</Nav.Link>
            <Button variant="primary" className="ms-2">
              <Link style={{ color: "black" }} to={"/register"}>
                Signup
              </Link>
            </Button>
            <Button variant="primary" className="ms-2">
              <Link style={{ color: "black" }} to={"/login"}>
                Signin
              </Link>
            </Button>
            <Button variant="primary" onClick={handleclick} className="ms-2">
              Logout
            </Button>
            <Button ariant="primary" onClick={handledelete} className="ms-2">
              DeleteAllBlogs
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
