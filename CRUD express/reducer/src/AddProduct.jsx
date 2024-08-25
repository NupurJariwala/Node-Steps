/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";

const initalstate = {
  image: "",
  title: "",
  category: "",
  price: "",
  description: "",
};
const AddProduct = () => {
  const [formdata, setformdata] = useState(initalstate);
  const { image, title, category, price, description } = formdata;
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/addproduct", formdata)
      .then((res) => {
        console.log(res);
        alert("data added Succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          name="image"
          value={image}
          onChange={(e) => handlechange(e)}
          type="text"
          placeholder="Image"
        />{" "}
        <br />
        <input
          name="title"
          value={title}
          onChange={(e) => handlechange(e)}
          type="text"
          placeholder="title"
        />{" "}
        <br />
        <select
          name="category"
          value={category}
          onChange={(e) => handlechange(e)}
        >
          <option value={""}>select Your Category</option>
          <option value={"men's clothing"}>men's clothing</option>
          <option value={"jewelery"}>jewelery</option>
          <option value={"electronics"}>electronics</option>
          <option value={"women's clothing"}>women's clothing</option>
        </select>
        <input
          name="price"
          value={price}
          onChange={(e) => handlechange(e)}
          type="text"
          placeholder="Price"
        />{" "}
        <br />
        <input
          name="description"
          value={description}
          onChange={(e) => handlechange(e)}
          type="text"
          placeholder="description"
        />{" "}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
