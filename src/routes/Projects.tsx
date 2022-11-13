import { motion } from "framer-motion";
import { useEffect } from "react";

import Project from "../components/Project";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}
