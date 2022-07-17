import React, { useState } from "react";
import { SocialMedia } from "../../components";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { works } from "../../constants/data";
import { AiFillEye } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { BsGithub, BsGlobe } from "react-icons/bs";

import "./PortfolioDetail.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PortfolioDetail() {
  const [toggleSlider, setToggleSlider] = useState(false);
  const [activeThumb, setActiveThumb] = useState();
  const { id } = useParams();
  const [project] = works.filter((work) => work.id === id);
  console.log(project);

  return (
    <>
      <SocialMedia />
      <div className="app__portfolio-inner app__padding app__flex">
        {toggleSlider && (
          <AnimatePresence>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="portfolio__slider"
              exit={{ scale: 0 }}
            >
              <HiX onClick={() => setToggleSlider(false)} />
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                thumbs={{ swiper: activeThumb }}
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {project.gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt="slide 1" className="img-responsive" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        )}
        <div className="app__portfolio-info">
          <h1 className="head-text">{project.name}</h1>
          <span>Front-End App</span>
          <h3 className="info-label">Desc:</h3>
          <p className="p-text">{project.description}</p>
          <h3 className="info-label">Technologies:</h3>
          <div className="app__portfolio-info-tags">
            {project.techs.map((tech, index) => (
              <div
                key={tech + index}
                className="portfolio_tag"
                style={{ background: tech.bgColor }}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <h3 className="info-label">Links:</h3>
          <div className="app__portfolio-info-links">
            <a href={project.codeLink} target="blank">
              <BsGithub />
            </a>
            <a href={project.projectLink} target="blank">
              <BsGlobe />
            </a>
          </div>
        </div>
        <div className="app__portfolio-gallery">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="app__portfolio-gallery-thumbnail"
          >
            {project.gallery.map((image, index) => (
              <SwiperSlide>
                <div>
                  <AiFillEye onClick={() => setToggleSlider(true)} />
                </div>
                <img
                  src={project.imgUrl}
                  alt="Project images"
                  className="img-responsive"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Thumbs]}
            className="app__portfolio-gallery-images"
          >
            {project.gallery.map((image, index) => (
              <SwiperSlide key={image + index}>
                <div>
                  <AiFillEye onClick={() => setToggleSlider(true)} />
                </div>
                <img
                  src={image}
                  alt="Project images"
                  className="img-responsive"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MotionWrap(PortfolioDetail, "app__portfolio");
