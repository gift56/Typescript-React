import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "./utilities/interface";

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
    <>
      <ShoppingCartProvider>
        <Navbar />
        <div className="container mb-4">
          <Routes>
            <Route path="/" element={<Home product={product} />} />
            <Route path="/store" element={<Store product={product} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
