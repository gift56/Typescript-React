import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useEffect, useState } from "react";
import axios from "axios";

const Store = () => {
  const [product, setProduct] = useState([]);
  const fetchingProducts = async () => {};

  return (
    <>
      <h1>Store</h1>
      <div className="grid">
        {storeItems.map((item) => (
          <div className="col" key={item.id}>
            <StoreItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
