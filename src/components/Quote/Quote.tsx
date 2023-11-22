import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section id="about" className="bg-black text-white h-screen mb-64">
      <div className="container mx-auto h-full flex items-center">
        <div className="wrapper ">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container"
          >
            <p className="white font-medium text-6xl mt-64">
              I{`'`}m{` `}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                @leif{` `}
              </span>
              - a Software Developer.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-40, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container"
          >
            <p className="white font-medium text-4xl mt-16 ml-4">
              Welcome to my digital workspace!
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-90, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container"
          >
            <p className="white font-medium text-4xl mt-14 ml-4">
              A passionate software developer dedicated to crafting innovative
              solutions for today&apos;s digital challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-130, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container"
          >
            <p className="white font-medium text-4xl mt-14 ml-4">
              This website is your gateway to exploring my journey, skills, and
              the exciting world of software development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
