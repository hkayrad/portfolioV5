import { motion } from "framer-motion";
import "../style/style.css";

export default function Resume() {
  return (
    <motion.div
      className="resumeWrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <embed className="resume" src="../resume.pdf" type="application/pdf" />
    </motion.div>
  );
}
