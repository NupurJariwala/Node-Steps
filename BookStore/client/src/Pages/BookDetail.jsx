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

const BookDetail = () => {
  const [data, setdata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get("http://localhost:8000/blogs/blogdetais/:id")
      .then((res) => {
        console.log(res.data);
        // setdata(res.data.blogs);
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
                  <CardTitle>{blogs.title}</CardTitle>
                  <CardText>{blogs.author}</CardText>
                  <CardText>{blogs.content}</CardText>
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

export default BookDetail;
