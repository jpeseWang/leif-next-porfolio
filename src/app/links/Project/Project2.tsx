"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic from "./images/cadigan.jpeg";

export default function Project2() {
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
          <p>TINGOAN® - Áo khoác cardigan crop caro đen MISS BLING TOP/BL</p>
        </div>
        <div className={styles.column}>
          <p>
            - FORM ÁO LEN NGẮN RỘNG THÂN - CHẤT LEN SẼ BÔNG XÙ VÀ CO GIÃN THEO
            THỜI GIAN - NÊN MẶC KÈM ÁO QUÂY BÊN TRONG KHI HOẠT ĐỘNG - KHÔNG GIẶT
            MÁY, GIẶT THEO HƯỚNG DẪN
          </p>
        </div>
      </div>
    </div>
  );
}
