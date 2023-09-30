// ParallaxEffect.js
"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./style.module.scss";
import imageSrc from "@/assets/images/hero_background.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Para() {
  const imageContainer = useRef(null);

  //   useLayoutEffect(() => {
  //     ScrollTrigger.create({
  //       trigger: imageContainer.current,
  //       pin: true,
  //       start: "top-=10px",
  //       end: "bottom",
  //     });
  //   }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div
          ref={imageContainer}
          className={styles.imageContainer}
          data-scroll
          data-scroll-speed="0.3"
        >
          <Image
            src={imageSrc}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p className="text-5xl font-semibold text-white pb-46">NICEEE</p>
        </div>
      </div>
    </div>
  );
}
