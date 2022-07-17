import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.scss";

function Navbar() {
  const links = ["home", "portfolio", "contact"];
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {links.map((link) => (
          <li
            key={`link-${link}`}
            className={`app__flex p-text ${
              pathname === `/${link}` ? "active" : ""
            }`}
          >
            <div></div>
            <a href={link === "home" ? "/" : `/${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-contact">
        <BsFillTelephoneFill />
        <a href="tel:+20 01012234592"> 010 122 34 592</a>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {links.map((link) => (
                <li key={`link-${link}`} className="app__flex p-text">
                  <Link to={link === "home" ? "/" : link}>{link}</Link>
                </li>
              ))}
              <ul className="app__navbar-social">
                <a href="https://www.linkedin.com/in/drcolonel/" target="blank">
                  <BsLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009694934872"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
                <a href="https://github.com/colonel14" target="blank">
                  <BsGithub />
                </a>
                <a href="tel:+20 01012234592">
                  <BsFillTelephoneFill />
                </a>
              </ul>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
