import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

// import { Card, Col, Row, Button } from "react-bootstrap";
const baseurl = "http://localhost:8080";
const Notes = () => {
  const [data, setdata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get(`${baseurl}/notes/usernotes`, {
        withCredentials: true,
      })
      .then((res) => {
        setdata(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdatafromdb();
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete(`${baseurl}/notes/delete/${_id}`, { withCredentials: true })
      .then((res) => {
        alert(res.data?.message);
        getdatafromdb();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <Row>
        {data.map((note) => (
          <>
            <Col key={note._id} md={4} className="mb-4">
              <Card>
                <CardImg
                  variant="top"
                  src={note.image[0] == "h" ? note.image : `${note.image}`}
                />
                <CardBody>
                  <CardTitle>{note.subject}</CardTitle>
                  <CardText>{note.description}</CardText>
                </CardBody>
                <div className="d-flex justify-content-between">
                  <Button variant="text">
                    <Link to={`/update/${note._id}`}>Upadte</Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </Button>
                </div>
                <CardFooter>
                  <small className="text-muted">User ID:{note.userId}</small>
                </CardFooter>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Notes;
