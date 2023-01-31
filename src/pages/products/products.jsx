import React from "react";
import Filter from "../../components/filter/filter";
import styles from "../../styles/product.module.css";

export const Products = () => {
  return (
    <div className={styles.products}>
      <div id="filter">
        <Filter />
      </div>
      <div id="results"></div>
    </div>
  );
};
