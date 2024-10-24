import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blogcreate = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [content, setcontent] = useState("");
  const [tags, settags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, author, tags);
    axios
      .post(
        "http://localhost:8080/blogs/create",
        { title, author, content, tags },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data.message);
        settitle("");
        setauthor("");
        setcontent("");
        settags([]);

        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <h2>Create Blogs</h2>
      <form onSubmit={handleSubmit}>
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
          <label className="form-label">Author</label>
          <textarea
            className="form-control"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
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

        <button type="submit" className="btn btn-primary">
          Add Blog
        </button>
      </form>
      <br />
      <Link to={"/"}>
        <button type="submit" className="btn btn-primary">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Blogcreate;
