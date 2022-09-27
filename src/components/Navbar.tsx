import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(0);

  const Links = [
    { link: "", name: "home" },
    { link: "about", name: "about" },
    { link: "service", name: "service" },
  ];
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="navLinks">
            {Links.map(({ link, name }) => (
              <li key={name}>
                <Link to={`/${link}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
