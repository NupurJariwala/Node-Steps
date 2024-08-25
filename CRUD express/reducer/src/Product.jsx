import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:8080/product");
      setdata(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Product</h1>
      {data.map((el) => (
        <div key={el.id}>
          <h1>{el.id}</h1>
          <img src={el.image} alt="" height={200} width={200} />
          <p>{el.title}</p>
          <h3>{el.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
