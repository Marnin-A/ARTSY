import React, { useState } from "react";
import styles from "./filter.module.css";
import Search from "../../assets/search.svg";
import Sliders from "../../assets/Sliders.svg";
import UpToggle from "../../assets/Uptoggle.svg";
import DownToggle from "../../assets/DownToggle.svg";

const Filter = () => {
  const [toggleUp, setToggle] = useState();

  const style = {
    transform: toggleUp ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };
  let count = 0;
  return (
    <div className={styles.filter}>
      <div className={styles.search_bar}>
        <span>
          <img
            style={{ width: "1em", marginLeft: "1em", marginRight: "1em" }}
            src={Search}
            alt="search icon"
          />
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
      <div className={styles.categories}>
        <h3>By Category</h3>
        <button
          onClick={() => {
            count++;
            count % 2 == 0 ? setToggle(false) : setToggle(true);
          }}
          style={{
            width: "min-content",
            background: "none",
            outline: "none",
            border: "none",
          }}
        >
          <img style={style} src={UpToggle} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
