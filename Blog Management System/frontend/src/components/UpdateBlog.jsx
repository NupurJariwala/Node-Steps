import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const baseurl = "http://localhost:8080/blogs";
const UpdateBlog = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [content, setcontent] = useState("");
  const [tags, settags] = useState([]);
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${baseurl}/update/${id}`,
        { title, author, content, tags },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data?.message);
        settitle("");
        setauthor("");
        setcontent("");
        settags([]);
      })
      .catch((err) => console.log(err));
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
          update
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

export default UpdateBlog;
