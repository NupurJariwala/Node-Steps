import { Route, Routes } from "react-router-dom";
import BlogList from "./Components/BlogList";
import BlogForm from "./Components/BlogForm";
import BlogDetails from "./Components/BlogDetails";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/details" element={<BlogDetails />} />
        {/* <Route path="/posts/:id" element={<BlogDetails />} /> */}
      </Routes>
    </div>
  );
};

export default App;
