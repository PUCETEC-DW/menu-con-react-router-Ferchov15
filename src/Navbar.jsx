import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { FaHome, FaPhone, FaUsers, FaUserShield, FaCog } from "react-icons/fa";

export default function Navbar() {
  const [openSolutions, setOpenSolutions] = useState(false);

  return (
    <nav className="navbar-dark">
      <div className="logo-dark">
        <Link to="/" className="link-dark">
          <FaHome style={{ marginRight: "6px" }} />
          Pagina Principal
        </Link>
      </div>

      <ul className="menu-dark">
        <li>
          <Link to="/about" className="link-dark">
            <FaUsers style={{ marginRight: "6px" }} />
            About us
          </Link>
        </li>

        <li
          className="dropdown-dark"
          onMouseEnter={() => setOpenSolutions(true)}
          onMouseLeave={() => setOpenSolutions(false)}
        >
          <span className="link-dark cursor-pointer">Otras opciones ▾</span>
          {openSolutions && (
            <ul className="dropdown-menu-dark">
              <li>
                <Link to="/dashboard" className="link-dark">
                  <FaUserShield style={{ marginRight: "6px" }} />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="link-dark">
                  <FaPhone style={{ marginRight: "6px" }} />
                  Contacts
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/settings" className="link-dark">
            <FaCog style={{ marginRight: "6px" }} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
