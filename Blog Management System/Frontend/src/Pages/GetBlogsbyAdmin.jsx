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

const baseurl = "http://localhost:8080/blogs";
const GetBlogsbyAdmin = () => {
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(false);
  const getdata = () => {
    axios
      .get(`${baseurl}/allblogs`, {
        withCredentials: true,
      })
      .then((res) => {
        setdata(res.data.Blogs);
      })
      .catch((err) => {
        console.log(err);
        seterr(true);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

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
                  <CardTitle className="text-primary">
                    Title : {blogs.title}
                  </CardTitle>
                  <CardText className="text-warning">
                    Author : {blogs.author}
                  </CardText>
                  <CardText className="text-success">
                    Content : {blogs.content}
                  </CardText>
                  <CardText className="text-secondary">
                    PublishedDate : {blogs.publishedDate}
                  </CardText>
                </CardBody>
                <CardFooter>
                  <small className="text-danger">by : {blogs.userName}</small>
                </CardFooter>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default GetBlogsbyAdmin;
