import React, { useEffect, useState } from "react";
import axios from "axios";

const Store = () => {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          "http://mocsyamtestapi-env.eba-dvawv2zg.ap-south-1.elasticbeanstalk.com/products/?pageNumber=0"
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    //data fetch
    // axios
    //   .get("")
    //   .then((res) => {
    //     console.table(res.data);
    //     setProduct(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div>
      <h1>Store data</h1>
      {product.map((list) => (
        <div key={list.id}>
          <h1>Product name: {list.title}</h1>
          <p>{list.description}</p>
          <p>Quantity: {list.quantity}</p>
          <p>Rating:{list.rating}</p>

          <img src={list.productImage.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Store;
