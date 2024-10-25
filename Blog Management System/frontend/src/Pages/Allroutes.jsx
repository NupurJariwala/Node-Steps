import { Route, Routes } from "react-router-dom";
import Signin from "./signin";
import Homepage from "./Homepage";
import Signup from "./signup";
import Otp from "../components/otp";
import Blogcreate from "./blogcreate";
import Blogs from "./blogs";

import AllBlogs from "./AllBlogs";
import UpdateBlog from "../components/UpdateBlog";
import PrivateRoutes from "../components/PrivateRoutes";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route
          path="/createblogs"
          element={
            <PrivateRoutes>
              <Blogcreate />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/allblogs"
          element={
            <PrivateRoutes>
              <AllBlogs />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <PrivateRoutes>
              <UpdateBlog />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
