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
import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// import { Card, Col, Row, Button } from "react-bootstrap";
const baseurl = "http://localhost:8080";
const Blogs = () => {
  const [data, setdata] = useState([]);
  const { userId } = useParams();
  const getdatafromdb = () => {
    axios
      .get(`${baseurl}/blogs/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
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
        {data.map((blog) => (
          <>
            <Col key={blog._id} md={4} className="mb-4">
              <Card>
                <CardBody>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardText>{blog.author}</CardText>
                  <CardText>{blog.content}</CardText>
                  <CardText>{blog.tags}</CardText>
                  <CardText>{blog.publishedDate}</CardText>
                </CardBody>
                <div className="d-flex justify-content-between">
                  <Button variant="text">
                    <Link to={`/update/${blog._id}`}>Upadte</Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </Button>
                </div>
                <CardFooter>
                  <small className="text-muted">User ID:{blog.userId}</small>
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
