import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import { Products } from "./utilities/interface";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  const [product, setProduct] = useState<Products[]>([]);

  const fetchAllProducts = async () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container mb-4">
        <Routes>
          <Route path="/" element={<Home product={product} />} />
          <Route path="/store" element={<Store product={product} />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
