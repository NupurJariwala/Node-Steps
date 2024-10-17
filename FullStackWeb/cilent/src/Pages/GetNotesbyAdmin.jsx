import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";

const baseurl = "http://localhost:8080";
const GetNotesbyAdmin = () => {
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(false);
  const getdata = () => {
    axios
      .get(`${baseurl}/notes/allnotes`, {
        withCredentials: true,
      })
      .then((res) => {
        setdata(res.data.notes);
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
        {data.map((note) => (
          <>
            <Col key={note._id} md={4} className="mb-4">
              <Card>
                <CardImg
                  variant="top"
                  src={note.image[0] == "h" ? note.image : `${note.image}`}
                />
                <CardBody>
                  <CardTitle>{note.subject}</CardTitle>
                  <CardText>{note.description}</CardText>
                </CardBody>

                <CardFooter>
                  <small className="text-muted">User ID:{note.userId}</small>
                </CardFooter>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default GetNotesbyAdmin;
