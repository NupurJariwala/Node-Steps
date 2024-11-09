import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Otp from "../Components/Otp";
import PrivateRoutes from "../Components/PrivateRoutes";
import BlogCreate from "./BlogCreate";
import Blogs from "./Blogs";
import UpdateBlogs from "./UpdateBlogs";
import GetBlogsbyAdmin from "./GetBlogsbyAdmin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route
          path="/createblogs"
          element={
            <PrivateRoutes>
              <BlogCreate />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <PrivateRoutes>
              <Blogs />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/update/:id" element={<UpdateBlogs />}></Route>
        <Route path="/allblogs" element={<GetBlogsbyAdmin />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
