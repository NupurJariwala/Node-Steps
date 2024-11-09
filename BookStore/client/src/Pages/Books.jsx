import axios from "axios";

import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Books = () => {
  const [data, setdata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get("http://localhost:8000/books/allbooks")
      .then((res) => {
        // console.log(res.data);
        setdata(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdatafromdb();
  }, []);

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
            <Col key={books._id} md={4}>
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
                  <CardText>Price : {books.price}/-</CardText>
                  <CardText>PublishedDate : {books.publishedDate}</CardText>
                </CardBody>
                <div className="d-flex justify-content-between mb-2">
                  <Button variant="light" text="primary">
                    <Link to={`/bookdetails/${books._id}`}>Details</Link>
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

export default Books;
