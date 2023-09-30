"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "@/components/PreLoader/PreLoader";
import HeroSection from "@/components/HeroSection/HeroSection";
import QuoteSection from "@/components/Quote/Quote";
import Skills from "@/components/Skills/Skills";
import CategorySlider from "@/components/CategorySlider/CategorySlider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="bg-black">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <HeroSection />
      {/* <Content /> */}
      <QuoteSection />
      <Skills />
      <CategorySlider />
    </main>
  );
}
