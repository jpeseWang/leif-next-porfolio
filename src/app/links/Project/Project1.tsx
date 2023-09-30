"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic from "./images/cadigan1.jpeg";

export default function Project1() {
  const container = useRef(null);
  const imageContainer = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image src={pic} fill={true} alt="project image" priority={true} />
        </div>
        <div className={styles.column} data-scroll data-scroll-speed="2">
          <p>Áo khoác cardigan trắng đính nơ</p>
        </div>
        <div className={styles.column}>
          <p>
            MÔ TẢ SẢN PHẨM Áo khoác cardigan trắng đính nơ form rộng Có 1 màu
            trắng duy nhất orm rộng size S M L Hàng order 10-15 ngày BẢNG SIZE Ở
            CUỐI
          </p>
        </div>
      </div>
    </div>
  );
}
