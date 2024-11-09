import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

// import { Card, Col, Row, Button } from "react-bootstrap";
const baseurl = "http://localhost:8080/blogs";
const Blogs = () => {
  const [data, setdata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get(`${baseurl}/userblogs`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.Blogs);
        setdata(res.data.Blogs);
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
      .delete(`${baseurl}/delete/${_id}`, { withCredentials: true })
      .then((res) => {
        alert(res.data?.message);
        getdatafromdb();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <Row>
        {data.map((blogs) => (
          <>
            <Col key={blogs._id} md={4} className="mb-4">
              <Card>
                <CardBody>
                  <CardTitle>Title : {blogs.title}</CardTitle>
                  <CardText>Author : {blogs.author}</CardText>
                  <CardText>Content : {blogs.content}</CardText>
                  <CardText>PublishedDate : {blogs.publishedDate}</CardText>
                </CardBody>
                <div className="d-flex justify-content-between">
                  <Button variant="text">
                    <Link to={`/update/${blogs._id}`}>Upadte</Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(blogs._id)}
                  >
                    Delete
                  </Button>
                </div>

                <CardFooter>
                  <small className="text-muted">by:{blogs.userName}</small>
                </CardFooter>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
