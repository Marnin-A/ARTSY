import React from "react";
import styles from "./filter.module.css";
import Search from "../../assets/search.svg";

const Filter = () => {
  return (
    <div>
      <div className={styles.search_bar}>
        <span>
          <img src={Search} alt="search icon" />
        </span>
        <input id={styles.search} type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Filter;
