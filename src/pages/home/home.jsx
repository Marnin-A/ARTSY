import React from "react";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.landing}>
        <h1 className={styles.landing__header}>
          Photography is poetry & beautiful untold stories
        </h1>
        <p className={styles.landing__text}>
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </section>
    </div>
  );
};
