import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="navLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
