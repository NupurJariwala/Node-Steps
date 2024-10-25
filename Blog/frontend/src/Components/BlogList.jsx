import { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";

const BlogList = () => {
  const [data, setdata] = useState([]);
  // console.log(data);

  const getblogfromdb = () => {
    axios 
      .get("http://localhost:8080/blogs/allblogs")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getblogfromdb;
  }, [data]);

  return (
    <div className="container mt-5">
      <Row>
        {data.map((blogs) => (
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
        ))}
      </Row>
    </div>
  );
};

export default BlogList;
