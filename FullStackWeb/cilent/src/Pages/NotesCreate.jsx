import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const NotesCreate = () => {
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(subject, description);
    axios
      .post(
        "http://localhost:8080/notes/create",
        { subject, description },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data.message);
        setsubject("");
        setdescription("");
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <h2>Create a Note</h2>
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
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NotesCreate;
