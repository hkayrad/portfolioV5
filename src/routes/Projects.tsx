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
          to="https://alierenkilinc.github.io"
          status="outside-left"
          name="AEK Personal Website"
          img="/img/aek.png"
          desc="
          A personal website made with vanilla HTML and JavaScript for Ali
          Eren Kilinc to show his portfolio to other people. (Waiting for texts to be sent)"
        />
        <Project
          index="1"
          to="https://docs.google.com/presentation/u/1/d/1WdBIRq7PaabWWXLWedBkUCKILvpiZ0CI/edit?usp=sharing&ouid=103587808423500113376&rtpof=true&sd=true"
          status="before"
          name="DrDir10"
          img="/img/drdir10.png"
          desc="
          We participated and designed a concept flying car in Teknofest
          2020 Flying Car Design Competition Free Category and became
          winners of our category."
        />
        <Project
          index="2"
          to="https://bohredom.hkayrad.me"
          status="active"
          name="Bohredom"
          img="/img/bohredom.png"
          desc='
          We, as Bohredom, managed to develop a website platform in order to
          serve to science enthusiasts as a source. If you ask us "How are
          you achieving this?" Bohredom website visualizing the space
          environment and make you feel as you are visiting the place while
          you are learning about it.'
        />
        <Project
          index="3"
          to="https://sehiredebiyati.wixsite.com/sehiredebiyati"
          status="after"
          name="Sehir Edebiyati"
          img="/img/sehiredebiyati.png"
          desc="
          With some literature enthusiast friends, we managed to find
          architectural connections to literature and made Sehir Edebiyati
          website to show it to other people who find it interesting."
        />
        <Project
          index="4"
          to="https://github.com/hkayrad/intercastedArchive"
          status="outside-right"
          name="Intercasted"
          img="/img/interDark.png"
          desc="
          Intercasted was a platform that you can live stream prepared
          videos with a growing audience and interact with them."
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
