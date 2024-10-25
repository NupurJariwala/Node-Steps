import { Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogList />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
