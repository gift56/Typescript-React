import { useEffect, useState } from "react";
import { Products } from "../utilities/interface";
import axios from "axios";
import { formatCurrency } from "../utilities/formatCurrency";


const Home = () => {
  const [product, setProduct] = useState<Products[]>([]);

  const fetchAllProducts = async () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  };

  const truckcateString = (str:string, num:number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log(product);

  return (
    <div>
      <div className="grid">
        {product.map((item: any) => (
          <div className="card" key={item.id}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="body">
              <div className="title">
                <h4>{truckcateString(item.title, 30)}</h4>
                <span>{formatCurrency(item.price)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
