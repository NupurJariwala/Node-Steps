import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookCreate = () => {
  const [userName, setuserName] = useState("");
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [ISBN, setISBN] = useState("");
  const [price, setprice] = useState("");
  const [tags, settags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/books/create",
        {
          userName,
          title,
          image,
          author,
          description,
          tags,
          ISBN,
          price,
        },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data.message);
        setuserName("");
        settitle("");
        setauthor("");
        setdescription("");
        settags([]);
        setimage("");
        setISBN("");
        setprice("");

        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container ">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="light" text="primary">
          <Link to={"/"}>Home page</Link>
        </Button>
      </div>
      <h2>Create a Blogs</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <textarea
            className="form-control"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <textarea
            className="form-control"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tags</label>
          <textarea
            className="form-control"
            value={tags}
            onChange={(e) => settags(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN No </label>
          <input
            type="text"
            className="form-control"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price </label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
