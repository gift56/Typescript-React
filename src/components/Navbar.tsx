import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const { openCart, closeCart, cartQuantity } = useShoppingCart();

  const Links = [
    { link: "", name: "home" },
    { link: "about", name: "about" },
    { link: "store", name: "store" },
  ];

  const selectProduct = (index: number) => {
    setActive(index);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="navLinked">
            {Links.map(({ link, name }, index) => (
              <li
                key={index}
                className={`li ${active === index ? "active" : ""}`}
                onClick={() => selectProduct(index)}
              >
                <Link to={`/${link}`}>{name}</Link>
              </li>
            ))}
          </ul>
          {cartQuantity > 0 && (
            <button className="btn myBtn" onClick={() => openCart()}>
              <AiOutlineShoppingCart size={30} color="#fff" />
              <p className="numbers">{cartQuantity}</p>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
