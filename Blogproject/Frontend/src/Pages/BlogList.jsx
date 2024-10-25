import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <Table border="1px" striped bordered hover style={{ width: "50%" }}>
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
              <td>
                <Link to={`http://localhost:8000/blogs/blogdetais/${blog._id}`}>
                  {blog.title}
                </Link>
              </td>
              <td>{blog.author}</td>
              <td data-testid="category">{blog.publishedDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BlogList;
