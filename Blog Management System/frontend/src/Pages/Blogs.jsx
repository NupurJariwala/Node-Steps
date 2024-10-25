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
import { Link } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const Blogs = () => {
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(false);
  const getdatafromdb = () => {
    axios
      .get("http://localhost:8080/blogs/blog", {
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

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:8080/blogs/delete/${_id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data?.message);
        getdatafromdb();
      })
      .catch((err) => console.log(err));
  };

  return err ? (
    <h1>You are not authorized to access this resource.</h1>
  ) : (
    <div className="container mt-5">
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
                </CardBody>
                <div className="d-flex justify-content-end gap-3">
                  {" "}
                  <Button variant="success">
                    <Link to={`/update/${blogs._id}`} className="text-light">
                      Upadte
                    </Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(blogs._id)}
                  >
                    Delete
                  </Button>
                </div>

                <CardFooter>
                  <small className="text-muted text-primary">
                    by {blogs.userName}
                  </small>
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
