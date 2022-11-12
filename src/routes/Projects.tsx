import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Project from "../components/Project";

export default function Projects() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="whitespace"></div>
      <article className="welcomer">
        <h2 className="welcomerTitle">Hakan Kayra Dogan</h2>
        <p className="welcomerText">Zorttiri zor zort zorttiri zort zort</p>
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
    </motion.div>
  );
}
