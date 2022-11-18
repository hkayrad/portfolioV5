import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Hakan Kayra Doğan";
  }, []);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}

      /* 
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      */
    >
      <div className="whitespace"></div>
      <article className="welcomer">
        <h2 className="welcomerTitle">Hakan Kayra Dogan</h2>
        <p className="welcomerText">
          I'm an Information Systems Engineering student @ Atilim University
        </p>
        <p className="links">Here are some links about myself:</p>
        <ul className="linksList">
          <li>
            <a href="http://github.com/hkayrad" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="http://linkedin.com/in/hkayrad"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <NavLink className="resume" to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
      </article>
      <a className="desktop" href="https://desktop.hkayrad.me">
        <img src="./img/computer.webp" alt="" className="computer" />
        <p className="desc">
          Click the computer to see pure JS desktop experience.
        </p>
      </a>
    </motion.div>
  );
}
