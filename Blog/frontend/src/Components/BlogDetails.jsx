import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/blogs/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>By {blog.author}</p>
      <p>Tags: {blog.tags && blog.tags.join(", ")}</p>
      <Link to="/">Back to Blog List</Link>
    </div>
  );
};

export default BlogDetails;
