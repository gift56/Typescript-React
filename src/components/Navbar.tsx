import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Nav, Navbar as NavbarBs } from "react-bootstrap";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="shadow-sm mb-3 header bg-white">
      <div className="container">
        <Nav className="myLinks">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>

        {cartQuantity > 0 && (
          <button className="btn myBtn countes" onClick={() => openCart()}>
            <AiOutlineShoppingCart size={30} color="#fff" />
            <p className="numbers">{cartQuantity}</p>
          </button>
        )}
      </div>
    </NavbarBs>
  );
};

export default Navbar;
