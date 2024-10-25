/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  // Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
  Button,
} from "react-bootstrap";

// import { useParams } from "react-router-dom";
// import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(false);
  const getdatafromdb = () => {
    axios
      .get("http://localhost:8080/blogs/allblogs", {
        withCredentials: true,
      })
      .then((res) => {
        setdata(res.data.blogs);
        // console.log(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
        seterr(true);
      });
  };

  useEffect(() => {
    getdatafromdb();
  }, [data]);

  const handledelete = () => {
    axios
      .delete("http://localhost:8080/blogs/deleteall", {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return err ? (
    <h1>You are not authorized to access this resource.</h1>
  ) : (
    <div className="container mt-5">
      <div>
        <Button ariant="primary" className="ms-2 mb-5 " onClick={handledelete}>
          DeleteAllBlogs
        </Button>
      </div>
      <Row>
        {data.map((blogs) => (
          <>
            <Col key={blogs._id} md={4} className="mb-4">
              <Card>
                <CardBody>
                  <CardTitle>Name : {blogs.title}</CardTitle>
                  <CardText>Author : {blogs.author}</CardText>
                  <CardText>Content : {blogs.content}</CardText>
                  <CardText>#Tags : {blogs.tags}</CardText>
                  <CardText>PublishedDate : {blogs.publishedDate}</CardText>
                  <CardText>{blogs.publishedDate}</CardText>
                </CardBody>

                <CardFooter>
                  <small className="text-muted"> by {blogs.userName}</small>
                </CardFooter>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default AllBlogs;
