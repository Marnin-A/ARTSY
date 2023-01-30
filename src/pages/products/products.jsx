import React from "react";
import Filter from "../../components/filter/filter";
import styles from "../../styles/product.module.css";

export const Products = () => {
  return (
    <div className={styles.products}>
      <div id="filter"></div>
      <div id="results">
        <Filter />
      </div>
    </div>
  );
};
