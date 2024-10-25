import axios from "axios";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [data, setdata] = useState([]);

  const getdatafromdb = () => {
    axios
      .get("http://localhost:8000/blogs/allblogs")
      .then((res) => {
        // console.log(res.data.blogs);
        setdata(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdatafromdb();
  }, []);
  return (
    <div>
      <h3>BlogList</h3>
      <table border="1px">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Title</th>
            <th>Author</th>
            <th>PublishedDate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blog, index) => (
            <tr key={blog._id} data-testid="item">
              <td>{index + 1}</td>
              <td>{blog.userName}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td data-testid="category">{blog.publishedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
