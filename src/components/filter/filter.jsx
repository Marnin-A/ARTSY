import React, { useState } from "react";
import styles from "./filter.module.css";
import Search from "../../assets/search.svg";
import Sliders from "../../assets/Sliders.svg";
import UpToggle from "../../assets/Uptoggle.svg";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";

const Filter = () => {
  const [toggleUp, setToggle] = useState(1);
  const [toggleUp1, setToggle1] = useState(1);
  const [toggleUp2, setToggle2] = useState(1);
  const [toggleUp3, setToggle3] = useState(1);

  const style = {
    transform: toggleUp ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };
  const style1 = {
    transform: toggleUp1 ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };
  const style2 = {
    transform: toggleUp2 ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };
  const style3 = {
    transform: toggleUp3 ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };
  let count = 0;
  const Toggler = () => {
    count++;
    count % 2 == 0 ? setToggle(false) : setToggle(true);
  };
  return (
    <div className={styles.filter}>
      <div className={styles.search_bar}>
        <span>
          <img id={styles.search_icon} src={Search} alt="search icon" />
        </span>
        <input id={styles.search} type="text" placeholder="Search" />
      </div>
      <div
        style={{
          marginTop: "15%",
          width: "13.4375em",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          style={{ width: "2.208125em", marginRight: "1.541875em" }}
          src={Sliders}
          alt=""
        />
        <span style={{ fontSize: "2em" }}>Filter</span>
      </div>
      <hr
        style={{
          width: "13.4375em",
          border: "0.175em solid #AFB091",
          borderRadius: "0.375em",
        }}
      />
      <div
        style={{
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <div className={styles.filter_section}>
          <h3>By Category</h3>
          <button
            onClick={() => {
              count++;
              count % 2 == 0 ? setToggle(false) : setToggle(true);
            }}
            className={styles.toggle}
          >
            <img style={style} src={UpToggle} alt="" />
          </button>
        </div>
        <div>
          <label htmlFor="editorial" className={styles.checkLabel}>
            <input
              type="checkbox"
              name="editorial"
              id="editorial"
              className={styles.checkBox}
            />
            Editorial
          </label>
          <label htmlFor="fashion" className={styles.checkLabel}>
            <input type="checkbox" name="fashion" className={styles.checkBox} />
            Fashion
          </label>
          <label htmlFor="optics" className={styles.checkLabel}>
            <input type="checkbox" name="optics" className={styles.checkBox} />
            Optics
          </label>
          <label htmlFor="art&Museum" className={styles.checkLabel}>
            <input
              type="checkbox"
              name="art&Museum"
              className={styles.checkBox}
            />
            Art & Museum
          </label>
          <label htmlFor="nature" className={styles.checkLabel}>
            <input type="checkbox" name="nature" className={styles.checkBox} />
            Nature
          </label>
        </div>
      </div>
      <div
        style={{
          marginBottom: "5%",
        }}
      >
        <div className={styles.filter_section}>
          <h3>By Price</h3>
          <button
            onClick={() => {
              count++;
              count % 2 == 0 ? setToggle1(false) : setToggle1(true);
            }}
            className={styles.toggle}
          >
            <img style={style1} src={UpToggle} alt="" />
          </button>
        </div>
        <div>
          <MultiRangeSlider
            style={{ position: "relative" }}
            min={0}
            max={20000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>
      <div
        style={{
          marginBottom: "5%",
        }}
      >
        <div className={styles.filter_section}>
          <h3>By Artist</h3>
          <button
            onClick={() => {
              count++;
              count % 2 == 0 ? setToggle2(false) : setToggle2(true);
            }}
            className={styles.toggle}
          >
            <img style={style2} src={UpToggle} alt="" />
          </button>
        </div>
        <div className={styles.costs}>
          <button className={styles.cost}>All</button>
          <button className={styles.cost}>Below $100.00</button>
          <button className={styles.cost}>$100.00 - $150.00</button>
          <button className={styles.cost}>$150.00 - $200.00</button>
          <button className={styles.cost}>Above $200.00</button>
        </div>
      </div>
      <div
        style={{
          marginBottom: "5%",
        }}
      >
        <div className={styles.filter_section}>
          <h3> Collection year</h3>
          <button
            onClick={() => {
              count++;
              count % 2 == 0 ? setToggle3(false) : setToggle3(true);
            }}
            className={styles.toggle}
          >
            <img style={style3} src={UpToggle} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
