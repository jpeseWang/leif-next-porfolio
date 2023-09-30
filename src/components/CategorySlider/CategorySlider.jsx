import styles from "./style.module.scss";
import { projects } from "./resources/data";
import Image from "next/image";
import Double from "./Double/Double";

export default function CategorySlider() {
  return (
    <main className={styles.main} id="category">
      <h1>
        Welcome to my portfolio project! Here, you&apos;ll find a curated
        collection of my creative works and professional accomplishments.
      </h1>
      <div className="my-36">
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} />
        {/* <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
      </div>
    </main>
  );
}
