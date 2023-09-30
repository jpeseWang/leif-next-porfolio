/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useEffect } from "react";
import Intro from "./Intro/Intro";
import Description from "./Description/Description";
import Projects from "./Projects/Projects";
import styles from "./page.module.scss";

export default function myChoice() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="bg-black">
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
