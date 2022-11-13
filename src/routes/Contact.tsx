import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Cnotact() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}
