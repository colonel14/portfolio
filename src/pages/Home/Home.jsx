import React from "react";
import { motion } from "framer-motion";
import {
  Header,
  About,
  Skills,
  // Experience,
  // Testimonial,
  Work,
  Footer,
} from "../../container";

function Home() {
  return (
    <motion.div
      nitial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 1 } }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 1 }}
    >
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      {/* <Experience /> */}
      <Footer />
    </motion.div>
  );
}

export default Home;
