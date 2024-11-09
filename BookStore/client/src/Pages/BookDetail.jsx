import axios from "axios";

import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Button,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const getdatafromdb = () => {
    axios
      .get(`http://localhost:8000/books/bookdetails/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
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
      .delete(`http://localhost:8000/books/bookdelete/${_id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data?.message);
        getdatafromdb();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container ">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="light" text="primary">
          <Link to={"/"}>Home page</Link>
        </Button>
      </div>
      <Row>
        {data.map((books) => (
          <>
            <Col key={books._id} md={4} className="mb-4">
              <Card>
                <CardBody>
                  <CardTitle>Title : {books.title}</CardTitle>
                  <Card.Img
                    variant="top"
                    src={books.image}
                    height={200}
                    width={200}
                  />
                  <CardText>Author : {books.author}</CardText>
                  <CardText>Description : {books.description}</CardText>
                  <CardText>Tags : {books.tags}</CardText>
                  <CardText>Price : {books.price}/-</CardText>
                  <CardText>ISBN : {books.ISBN}</CardText>

                  <CardText>PublishedDate : {books.publishedDate}</CardText>
                </CardBody>

                <div className="d-flex justify-content-between">
                  <Button variant="text">
                    <Link to={`/bookupdate/${books._id}`}>Upadte</Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(books._id)}
                  >
                    Delete
                  </Button>
                </div>

                <CardFooter>
                  <small className="text-muted">by:{books.userName}</small>
                </CardFooter>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default BookDetail;
