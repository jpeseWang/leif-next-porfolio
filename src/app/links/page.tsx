"use client";
import { useEffect } from "react";
import Project1 from "./Project/Project1";
import Para from "./Project/Para";
import Project2 from "./Project/Project2";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="bg-black">
      <Project1 />
      <Project2 />
    </main>
  );
}
