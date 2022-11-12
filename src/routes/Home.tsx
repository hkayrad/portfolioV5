import { NavLink } from "react-router-dom";
import "../style/style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="whitespace"></div>
      <article className="welcomer">
        <h2 className="welcomerTitle">Hakan Kayra Dogan</h2>
        <p className="welcomerText">
          I'm a Information Systems Engineering student @ Atilim University
        </p>
      </article>
      <NavLink className="resume" to="/resume">
        <img src="./img/computer.webp" alt="" className="computer" />
      </NavLink>
      <div className="whitespace"></div>
    </div>
  );
}
