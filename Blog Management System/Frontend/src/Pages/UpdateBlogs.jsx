import axios from "axios";
import { useState } from "react";

const baseurl = "http://localhost:8080/blogs";
const UpdateBlogs = () => {
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${baseurl}/update/:id`,
        { subject, description },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data?.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
      <div className="container mt-5">
        <h2>Update a Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
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

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogs;
