import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Cnotact() {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="whitespace"></div>
      <img className="dkImg" src="/img/dk.webp" alt="" />
      <div className="text">
        <p>
          I enjoy working with people who are creative and passionate about
          their work. Let's work together to make this world more beautiful!
        </p>
        <p>We can be like these people together, let's talk!</p>
        <ul>
          <li>If you want mail: me@hkayrad.me</li>
          <li>
            If you want my telegram:&nbsp;
            <a href="https://t.me/hkayrad" target="_blank">
              @hkayrad
            </a>
          </li>
          <li>If you want to talk, ask my phone number via Telegram</li>
        </ul>
      </div>
      <div className="whitespace"></div>
    </motion.div>
  );
}
