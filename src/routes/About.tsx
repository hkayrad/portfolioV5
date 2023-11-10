import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="whitespace 1"></div>
      <img className="portrait" src="/img/portrait.webp" alt="" />
      <div className="edu">
        <h2 className="title">Education</h2>
        <ul>
          <li>
            <p className="school">
              Atilim University <span className="year"> (2022-Current)</span>
            </p>
            <p className="info"><i>Major</i>: Information Systems Engineering</p>
            <p className="info"><i>Minor</i>: Computer Engineering</p>
          </li>
          <li>
            <p className="school">
              Bahcesehir Science and Technology High School
              <span className="year"> (2018-2022)</span>
            </p>
            <p className="info">Math - Science Path (GPA: 98.58)</p>
          </li>
          <li>
            <p className="school">
              Eskisehir Deneyap Technology Program
              <span className="year"> (2018-2022)</span>
            </p>
            <p className="info">Basic Electronics and Material Science</p>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="row">
          <p>React</p>
          <p>Express</p>
          <p>NodeJS</p>
          <p>Git</p>
        </div>
        <div className="row">
          <p>TypeScript</p>
          <p>Dart</p>
          <p>Flutter</p>
          <p>PHP</p>
        </div>
        <div className="row">
          <p>HTML</p>
          <p>Svelte</p>
          <p>Firebase</p>
          <p>SASS</p>
        </div>
      </div>
      <div className="whitespace 2"></div>
    </motion.div>
  );
}
