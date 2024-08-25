import Product from "./Product";
import "./App.css";

import AddProduct from "./AddProduct";
const App = () => {
  return (
    <div className="App">
      <Product />
      <hr />
      <AddProduct />
    </div>
  );
};

export default App;
