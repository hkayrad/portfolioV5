//* dependencies
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../style/style.css";

export default function Navbar() {
  //? getting the current value of cookie
  function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //? set the default state to darkMode cookie value
  const [darkMode, setDarkMode] = useState(getCookie("darkMode"));
  console.log(darkMode);

  //? set the expiry date to 30 days
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 30);

  //? if darkMode cookie value is empty, set it to false
  if (getCookie("darkMode") == "") {
    document.cookie = `darkMode=${darkMode}; expires=${expiry}`;
  }

  //? set the current theme
  const root = document.getElementById("root");
  var buttonChecked = false;
  if (getCookie("darkMode") == "true") {
    buttonChecked = true;
    root?.style.setProperty("--bgcolor", "#fff");
    root?.style.setProperty("--color", "#111");
    root?.style.setProperty("--inversion", "invert(0)");
  } else {
    buttonChecked = false;
    root?.style.setProperty("--color", "#fff");
    root?.style.setProperty("--bgcolor", "#111");
    root?.style.setProperty("--inversion", "invert(1)");
  }

  //? toggling dark mode
  const toggleDarkMode = () => {
    console.log(`darkMode=${darkMode} with expiry set to ${expiry}`);
    if (darkMode == "true") {
      document.cookie = `darkMode=${false}; expires=${expiry}`;
      setDarkMode("false");
    } else {
      document.cookie = `darkMode=${true}; expires=${expiry}`;
      setDarkMode("true");
    }
    console.log(`darkMode=${darkMode} with expiry set to ${expiry}`);
  };

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
        <div className="whitespace">
          <label className="switch">
            <input
              type="checkbox"
              onClick={toggleDarkMode}
              defaultChecked={buttonChecked}
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
      <div className="mobileCentering">
        <NavLink to="/" className="mobileHeader">
          HKD
        </NavLink>
        <label className="switch">
          <input
            type="checkbox"
            onClick={toggleDarkMode}
            defaultChecked={buttonChecked}
          />
          <span className="slider"></span>
        </label>
      </div>
      <nav className="navMenu">
        <ul className="navList">
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
      </nav>
      <Outlet />
    </>
  );
}
