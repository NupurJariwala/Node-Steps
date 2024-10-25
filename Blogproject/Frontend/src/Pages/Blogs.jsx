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
} from "react-bootstrap";

const Blogs = () => {
  const [data, setdata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get("http://localhost:8000/blogs/allblogs")
      .then((res) => {
        // console.log(res.data.blogs);
        setdata(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdatafromdb();
  }, []);
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
