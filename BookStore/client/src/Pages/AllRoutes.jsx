import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Books from "./Books";
import BookDetail from "./BookDetail";
import BookCreate from "./BookCreate";
import BookUpadte from "./BookUpdate";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/books" element={<Books />}></Route>
        <Route path="/bookdetails/:id" element={<BookDetail />}></Route>
        <Route path="/bookcreate" element={<BookCreate />}></Route>
        <Route path="/bookupdate/:id" element={<BookUpadte />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
