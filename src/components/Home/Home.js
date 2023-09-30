import React from "react";

import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        {/* <img
          src="https://images.unsplash.com/photo-1695648259930-920a1b92bfed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
          alt="portfolio-img"
        /> */}
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I&apos;m <span>Leif</span>
        </h3>
        <span className="job"> Software Developer </span>
        <span className="text">
          Driven to create <br /> cutting-edge
          <br />
          web products.
        </span>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        <div className="web">Front-End Developer</div>
        <div className="ui">ReactJS</div>
        <div className="freelance">.NET</div>
      </div>
    </motion.div>
  );
};

export default Home;
