import { useEffect, useState } from "react";
import { Products } from "../utilities/interface";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState<Products[]>([]);

  const fetchAllProducts = async () => {
    axios.get<Products[]>("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  const { category, description, id, image, price, title }: any = product;

  console.log(product);

  return (
    <div>
      <div className="grid">
        <div className="card">
          <div className="image">{/* <img src={title} alt={title} /> */}</div>
          <div className="body">
            <div className="title"></div>
          </div>
        </div>
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default Home;
