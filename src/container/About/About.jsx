import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./about.scss";

function About() {
  return (
    <div className="app__about app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__about-img"
      >
        <img src={images.about} alt="about_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="circle_bg"
          className="overlay_circle"
        />
      </motion.div>
      <div className="app__about-info">
        <h2 className="head-text">Abdallah Mohamed</h2>
        <span className="p-text">Full-Stack developer/Freelancer</span>
        <p></p>
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
