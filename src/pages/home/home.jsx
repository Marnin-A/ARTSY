import React from "react";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      {/* Intro section*/}
      <section className={styles.intro}>
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
        <h3 className={styles.products__header}>Featured products</h3>
        <hr />
        {/* First product */}
        <div className={styles.product}>
          <img className={styles.product__img} src="" alt="" />
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.creators}>
              <ul className={styles.creators__imgs}>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
              </ul>
              <span id="num_of_creators">64 major creators</span>
              <button className={styles.details__btn}></button>
            </div>
          </div>
        </div>

        <hr />

        {/* Second product */}
        <div className={styles.product}>
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.creators}>
              <ul className={styles.creators__imgs}>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
              </ul>
              <span id="num_of_creators">64 major creators</span>
              <button className={styles.details__btn}></button>
            </div>
          </div>
          <img className={styles.product__img} src="" alt="" />
        </div>

        <hr />

        {/* Third product */}
        <div className={styles.product}>
          <img className={styles.product__img} src="" alt="" />
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.creators}>
              <ul className={styles.creators__imgs}>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
                <li className={styles.creator}></li>
              </ul>
              <span id="num_of_creators">64 major creators</span>
              <button className={styles.details__btn}></button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className={styles.upcoming}>
        <div className={styles.Uheader__container}>
          <h4 className={styles.upcoming__header}>
            See Upcoming Auctions and Exhibitions
          </h4>
          <hr className={styles.arrow3} />
        </div>
      </section>
      {/* Explore Section */}
      <section className={styles.explore}></section>
      {/* Top Creators Section */}
      <section className={styles.top__creators}></section>
      <footer></footer>
    </div>
  );
};
