import { useState } from "react";
import "./navigation.css";

const navItems = [
  { name: "home", link: "#home" },
  { name: "skills", link: "#skills" },
  { name: "projects", link: "#projects" },
  { name: "contact me", link: "#contact" },
];

function Nav() {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item) => (
          <li className="nav__item" key={item.link}>
            <a
              href={item.link}
              className={`nav__link ${
                activeLink === item.link ? "nav__link--active" : ""
              }`}
              onClick={() => setActiveLink(item.link)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
