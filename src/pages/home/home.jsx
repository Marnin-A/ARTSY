import React from "react";
import { Link } from "react-router-dom";
import Email from "../../assets/email.svg";
import User1 from "../../assets/Ellipse14.webp";
import User2 from "../../assets/Ellipse15.webp";
import User3 from "../../assets/Ellipse16.webp";
import User4 from "../../assets/Ellipse17.webp";
import User5 from "../../assets/Ellipse18.webp";
import CreatorImg from "../../assets/Rectangle299.png";
import Img1 from "../../assets/Rectangle230.webp";
import Img2 from "../../assets/Rectangle231.webp";
import Img3 from "../../assets/Rectangle232.webp";
import Img4 from "../../assets/Rectangle233.webp";
import Img5 from "../../assets/Rectangle234.webp";
import styles from "../../styles/home.module.css";
import BlueArrow from "../../assets/blueArrow.svg";
import Location from "../../assets/locationsvg.svg";
import Product1 from "../../assets/Rectangle299.webp";
import Product2 from "../../assets/Rectangle300.webp";
import Product3 from "../../assets/Rectangle301.webp";
import RightArrow from "../../assets/RightArrow.webp";

export const Home = () => {
  const date = new Date();
  let CurrentYear = date.getFullYear();
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
          <div id={styles.img1} style={{ paddingRight: 8 }}>
            <img src={Img1} alt="placeholder" style={{ width: "100%" }} />
          </div>

          <div id={styles.img2} style={{ padding: 8 }}>
            <img src={Img2} alt="placeholder" style={{ width: "100%" }} />
          </div>
          <div id={styles.img3} style={{ padding: 8 }}>
            <img src={Img3} alt="placeholder" style={{ width: "100%" }} />
          </div>
          <div id={styles.img4} style={{ padding: 8 }}>
            <img src={Img4} alt="placeholder" style={{ width: "100%" }} />
          </div>
          <div id={styles.img5} style={{ paddingLeft: 8 }}>
            <img src={Img5} alt="placeholder" style={{ width: "100%" }} />
          </div>
        </div>
      </section>
      {/* Products section */}
      <section className={styles.products}>
        <h3 className={styles.products__header}>Featured products</h3>
        <hr />
        {/* First product */}
        <div className={styles.product}>
          <img className={styles.product__img} src={Product1} alt="" />
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.creators}>
              <ul className={styles.creators__imgs}>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User1})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User2})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User3})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User4})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User5})` }}
                ></li>
              </ul>
              <span id="num_of_creators">64 major creators</span>
              <button
                className={styles.details__btn}
                style={{
                  backgroundImage: `url(${RightArrow})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></button>
            </div>
          </div>
        </div>

        <hr />

        {/* Second product */}
        <div className={styles.product} id={styles.product2}>
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.creators}>
              <ul className={styles.creators__imgs}>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User1})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User2})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User3})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User4})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User5})` }}
                ></li>
              </ul>
              <span id="num_of_creators">64 major creators</span>
              <button
                className={styles.details__btn}
                style={{
                  backgroundImage: `url(${RightArrow})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></button>
            </div>
          </div>
          <img className={styles.product__img} src={Product2} alt="" />
        </div>

        <hr />

        {/* Third product */}
        <div className={styles.product}>
          <img className={styles.product__img} src={Product3} alt="" />
          <div className={styles.product__details}>
            <h3>The Boolean Egyptian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className={styles.creators}>
              <ul className={styles.creators__imgs}>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User1})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User2})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User3})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User4})` }}
                ></li>
                <li
                  className={styles.creator}
                  style={{ backgroundImage: `url(${User5})` }}
                ></li>
              </ul>
              <span id="num_of_creators">64 major creators</span>
              <button
                className={styles.details__btn}
                style={{
                  backgroundImage: `url(${RightArrow})`,

                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></button>
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
          {/* <input className={styles.slider} type="range" /> */}
          <div className={styles.slider}>
            <div className={styles.slider__ball1}></div>
          </div>
          <span className={styles.slider__btns}>
            <button
              className={styles.slider__btn}
              id={styles.slider__btn1}
            ></button>
            <button
              className={styles.slider__btn}
              id={styles.slider__btn2}
            ></button>
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
      <section className={styles.top__creators}>
        <div style={{ padding: " 5.5em 5.5em 0em 5.5em" }}>
          <div className={styles.creator__top}>
            <h1 className={styles.creator__h1}>TOP CREATORS OF THE WEEK</h1>
            <div className={styles.creator__slider}>
              <div className={styles.new__slider}>
                <div className={styles.slider__ball}></div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={styles.slider__item}>Editorials</span>
                <span className={styles.slider__item}>Fashion</span>
                <span className={styles.slider__item}>Lifestyle</span>
                <span className={styles.slider__item}>Blueprint</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.creator__text}>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there's always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </div>
        <div className={styles.top__creator}>
          <img src={CreatorImg} alt="" />
        </div>
      </section>
      <footer>
        <div className={styles.newsletter}>
          <h2 className={styles.newsletter__header}>NEWSLETTER</h2>
          <div className={styles.newsletter__text}>
            Subscribe to get daily updates on new drops & exciting deals{" "}
          </div>
          <div className={styles.newsletter__input}>
            <input
              type="text"
              name=""
              id={styles.newsletter__input}
              placeholder="ENTER YOUR EMAIL"
            />
            <button className={styles.newsletter__btn}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div id={styles.footer__logo}>ARTSY.</div>
          <div id={styles.footer__nav}>
            <Link className={styles.ftr__nav__item} href="/home">
              Home
            </Link>
            <Link className={styles.ftr__nav__item} href="/blog">
              Blog
            </Link>
            <Link className={styles.ftr__nav__item} href="/market">
              Marketplace
            </Link>
            <Link className={styles.ftr__nav__item} href="/wallets">
              Wallets
            </Link>
            <Link className={styles.ftr__nav__item} href="/auctions">
              Auctions
            </Link>
            <Link className={styles.ftr__nav__item} href="/rates">
              Rates
            </Link>
            <Link className={styles.ftr__nav__item} href="/drops">
              Drops
            </Link>
            <Link className={styles.ftr__nav__item} href="/high-bids">
              High bids
            </Link>
          </div>
          <div id={styles.footer__contacts}>
            <div id={styles.email}>
              <img class={styles.contacts__img} src={Email} alt="" />
              <Link
                class={styles.contacts__link}
                href="mailto:artsystudios@gmail.com"
              >
                artsystudios@gmail.com
              </Link>
            </div>
            <div id={styles.location}>
              <img class={styles.contacts__img} src={Location} alt="" />
              <Link
                class={styles.contacts__link}
                to="https://maps.google.com"
                target="_blank"
              >
                Lagos, Nigeria.
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright */}

        <div className={styles.copyright}>
          Artsystudios © {CurrentYear}. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
