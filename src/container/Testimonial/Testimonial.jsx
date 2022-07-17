import React from "react";
import { AppWrap } from "../../wrapper";

import "./testimonial.scss";
import "swiper/css";
import "swiper/css/autoplay";

function Testimonial() {
  return (
    <div className="app__testimonials">
      <h1 className="head-text">Testimonials</h1>
    </div>
  );
}

export default AppWrap(Testimonial, "testimonial");
