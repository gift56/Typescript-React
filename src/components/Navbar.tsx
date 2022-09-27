import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(0);

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
          <ul className="navLinks">
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
          <button>
            <AiOutlineShoppingCart size={40} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
