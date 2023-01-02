import React from "react";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      {/* Intro section*/}
      <section className={styles.intro}>
        <img src="" alt="" />
        <h1 className={styles.intro__header}>
          Photography is poetry & beautiful untold stories
        </h1>
        <p className={styles.intro__text}>
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <div className={styles.carousel}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>

      {/* Products section */}
      <section className={styles.products}>
        <h2 className={styles.products__header}>Featured products</h2>
        <hr />
        <div className={styles.product}>
          <img className={styles.product__img} src="" alt="" />
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.product__creators}>
              <img className={styles.product__creator} src="" alt="" />
              <img className={styles.product__creator} src="" alt="" />
              <img className={styles.product__creator} src="" alt="" />
              <img className={styles.product__creator} src="" alt="" />
              <img className={styles.product__creator} src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
