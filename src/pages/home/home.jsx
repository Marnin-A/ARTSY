import React from "react";
import styles from "../../styles/home.module.css";
import BlueArrow from "../../assets/blueArrow.svg";

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
            <hr className={styles.arrow3} />
          </h4>
        </div>
        <div className={styles.upcoming__product}>
          <div className={styles.product__details}>
            <ul className={styles.product__name}>
              <li className={styles.dot}></li>
              <li id={styles.product__name}>MONALISA REDEFINED IN STYLE.</li>
            </ul>
            <div className={styles.number__time}>
              <span className={styles.number}>01</span>
              <span className={styles.time}>
                Start on : 08:00 GTS . Monday{" "}
              </span>
            </div>
            <div className={styles.product__info}>
              <p className={styles.product__text}>
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
              <a className={styles.more} href="#">
                See more
              </a>
              <button className={styles.reminder}> Set a reminder</button>
            </div>
          </div>
        </div>
        <div className={styles.slider__controls}>
          <input className={styles.slider} type="range" />
          <span className={styles.slider__btns}>
            <button className={styles.slider__btn}></button>
            <button className={styles.slider__btn}></button>
          </span>
        </div>
      </section>
      {/* Explore Section */}
      <section className={styles.explore}>
        <div className={styles.explore__market}>
          <span className={styles.market__text}>Explore marketplace</span>
          <a href="">
            <img
              src={BlueArrow}
              alt="Arrow redirecting you to the marketplace"
            />
          </a>
        </div>
        <div className={styles.explore__auctions}>
          <span className={styles.auctions__text}>See auctions </span>
          <a href="">
            <img src={BlueArrow} alt="Arrow redirecting you to the auctions" />
          </a>
        </div>
      </section>
      {/* Top Creators Section */}
      <section className={styles.top__creators}></section>
      <footer></footer>
    </div>
  );
};
