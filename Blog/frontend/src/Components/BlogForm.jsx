import axios from "axios";
import { useState } from "react";

const BlogForm = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [content, setcontent] = useState("");
  const [tags, settags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, author);
    axios
      .post(
        "http://localhost:8080/blogs/create",
        { title, author, content, tags },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data.message);
        // console.log(res.data);
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
    <div>
      <h1>Blog Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => settags(e.target.value)}
          required
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
