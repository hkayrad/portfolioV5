//* dependencies
import { NavLink, Outlet } from "react-router-dom";
import "../style/style.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="whitespace"></div>
        <ul className="leftNav">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/projects"
              end
            >
              Projects
            </NavLink>
          </li>
        </ul>
        <NavLink className="name" to="/">
          HKD
        </NavLink>
        <ul className="rightNav">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/about"
              end
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/contact"
              end
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
        <div className="whitespace"></div>
      </nav>
      <nav className="navmenu"></nav>
      <Outlet />
    </>
  );
}
