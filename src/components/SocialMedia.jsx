import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="app__social">
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
    </div>
  );
}

export default SocialMedia;
