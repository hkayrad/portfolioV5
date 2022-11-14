import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Project from "../components/Project";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  const sliderLength = 4;
  const [activeIndex, setActiveIndex] = useState(sliderLength / 2);

  //? nextBtn handling
  const nextBtn = () => {
    const nextIndex =
      activeIndex + 1 <= sliderLength ? activeIndex + 1 : activeIndex;
    const prevIndex =
      activeIndex - 1 >= 0 && activeIndex - 1 < sliderLength - 1
        ? activeIndex - 1
        : -1;

    try {
      const prevGroup = document.querySelector(`[data-index="${prevIndex}"]`);
      //@ts-ignore
      prevGroup.dataset.status = "outside-left";
    } catch (e) {
      console.log(e);
    }

    const currentGroup = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //@ts-ignore

    //@ts-ignore
    currentGroup.dataset.status = "before";
    //@ts-ignore
    nextGroup.dataset.status = "active";

    try {
      const nexxtGroup = document.querySelector(
        `[data-index="${nextIndex + 1}"]`
      );
      //@ts-ignore
      nexxtGroup.dataset.status = "after";
    } catch (e) {
      console.log(e);
    }

    setActiveIndex(nextIndex);
  };

  //? prevBtn handling
  const prevBtn = () => {
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
    const nextIndex =
      activeIndex + 1 <= sliderLength && activeIndex + 1 > 1
        ? activeIndex + 1
        : -1;

    try {
      const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
      //@ts-ignore
      nextGroup.dataset.status = "outside-right";
    } catch (e) {
      console.log(e);
    }

    const currentGroup = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const prevGroup = document.querySelector(`[data-index="${prevIndex}"]`);

    //@ts-ignore
    currentGroup.dataset.status = "after";
    //@ts-ignore
    prevGroup.dataset.status = "active";

    try {
      const prevvGroup = document.querySelector(
        `[data-index="${prevIndex - 1}"]`
      );
      //@ts-ignore
      prevvGroup.dataset.status = "before";
    } catch (e) {
      console.log(e);
    }

    setActiveIndex(prevIndex);
  };

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="slider">
        <Project
          index="0"
          status="outside-left"
          name="test"
          img="https://via.placeholder.com/1100x600"
          desc="test"
        />
        <Project
          index="1"
          status="before"
          name="test"
          img="https://via.placeholder.com/1100x600"
          desc="test"
        />
        <Project
          index="2"
          status="active"
          name="test"
          img="https://via.placeholder.com/1100x600"
          desc="test"
        />
        <Project
          index="3"
          status="after"
          name="test"
          img="https://via.placeholder.com/1100x600"
          desc="test"
        />
        <Project
          index="4"
          status="outside-right"
          name="test"
          img="https://via.placeholder.com/1100x600"
          desc="test"
        />
      </div>
      <div className="buttons">
        <button className="prev" onClick={prevBtn}>
          Previous Project
        </button>
        <button className="next" onClick={nextBtn}>
          Next Project
        </button>
      </div>
    </motion.div>
  );
}
