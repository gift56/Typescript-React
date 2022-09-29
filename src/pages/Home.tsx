import { useEffect, useState } from "react";
import { Products } from "../utilities/interface";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState<Products>({
    category: "",
    description: "",
    id: "",
    image: "",
    price: "",
    title: "",
  });

  const fetchAllProducts = async () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log(product);

  return (
    <div>
      <p>{product?.title}</p>
    </div>
  );
};

export default Home;
