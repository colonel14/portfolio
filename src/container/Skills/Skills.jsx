import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { testimonials } from "../../constants/data";
import { skills } from "../../constants/data";
import { HiViewGrid } from "react-icons/hi";
import { MdViewCarousel } from "react-icons/md";

import "./Skills.scss";
import "swiper/css";
import "swiper/css/autoplay";

function Skills() {
  const [skillsView, setSkillsView] = useState(true);
  const toggleSkillsView = () => {
    setSkillsView(!skillsView);
  };
  return (
    <div className="app__skills">
      <h1 className="head-text">Skills & Expericences</h1>
      <div className="toggle_view">
        {skillsView ? (
          <HiViewGrid onClick={toggleSkillsView} />
        ) : (
          <MdViewCarousel onClick={toggleSkillsView} />
        )}
      </div>
      {skillsView ? (
        <div className="app__skills-ticker">
          <Marquee speed={80} gradient={false}>
            {skills.map((skill) => (
              <div className="app__skills-item app__flex" key={skill.name}>
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      ) : (
        <div className="app__skills-list">
          {skills.map((skill) => (
            <div className="app__skills-item app__flex" key={skill.name}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div>
      )}
      <div className="app__flex roadmap-lines">
        {testimonials.map((item, index) => (
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={index}
            className="app__exps-item"
          >
            <div className="app__exps-item_inner">
              <div className="app__flex">
                <span>{item.year}</span>
                <h1 className="head-text">{item.name}</h1>
              </div>
              <p className="p-text">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
