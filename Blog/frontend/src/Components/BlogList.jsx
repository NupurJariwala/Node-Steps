import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseurl = "http://localhost:8080";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  const getblogfromdb = () => {
    axios
      .get(`${baseurl}/blogs`, {
        withCredentials: true,
      })
      .then((res) => {
        setBlogs(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getblogfromdb;
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content.substring(0, 100)}...</p>
          <Link to={`/blogs/${blog._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
