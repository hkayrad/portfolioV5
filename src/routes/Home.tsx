import { NavLink } from "react-router-dom";
import "../style/style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="whitespace"></div>
      <article className="welcomer">
        <h2 className="welcomerTitle">Hakan Kayra Dogan</h2>
        <p className="welcomerText">
          I'm an Information Systems Engineering student @ Atilim University
        </p>
        <p className="links">Here are some links about myself:</p>
        <ul className="linksList">
          <li>
            <a href="http://github.com/hkayrad">GitHub</a>
          </li>
          <li>
            <a href="http://linkedin.com/in/hkayrad">Linkedin</a>
          </li>
        </ul>
      </article>
      <NavLink className="resume" to="/resume">
        <img src="./img/computer.webp" alt="" className="computer" />
        <p className="desc">Psst, you can click the image to view my resume</p>
      </NavLink>
    </div>
  );
}
