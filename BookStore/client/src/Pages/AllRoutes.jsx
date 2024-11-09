import { Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";
import Blogs from "./Blogs";
import BlogDetails from "./BlogDetails";
import BlogsCreate from "./BlogCreate";
import HomePage from "./HamePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/bloglist" element={<BlogList />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogdetails" element={<BlogDetails />}></Route>
        <Route path="/createblogs" element={<BlogsCreate />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
