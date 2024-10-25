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
        <Route path="/create" element={<BlogForm />} />
        <Route path="/details" element={<BlogDetails />} />
        <Route path="/allbogs" element={<BlogList />} />
      </Routes>
    </div>
  );
};

export default App;
