import styles from "./Intro.module.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div class={styles.pageContainer}>
      <div class={styles.body}>
        <div class={styles.title}>Hi! &#128075; I am Isselin Moektijono</div>
        <div class={styles.paragraph}>
          People often say I look like a Japanese, however I was born in
          Indonesia. &#128539; <br />
          During my university study in Singapore, I took a part-time job
          creating websites and often freelancing as a graphic designer.
          Learning JavaScript along the way, from thereon was the start of my
          interest towards Frontend Web Development and Computer Science. After
          graduating in 2019, now it has been 3 years since I was hired as a
          Frontend Engineer in a decacorn company in Southeast Asia. <br />
          <br />
          It is my pleasure to introduce myself through this <s>
            document
          </s>{" "}
          website to you!
        </div>
        <div class={styles.btnContainer}>
          <Link to="/projects" class={styles.btnProject}>
            Visit my personal space
          </Link>
          <Link to="/projects" class={styles.btnProject}>
            Visit my projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
