import React from "react";
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
        <div className={styles.container}>
          <h1 className={styles.title} > ARTSY</h1>

          <ul className={styles.listcontainer}>
            <li>Home</li>
            <li>Market place</li>
            <li>Auction</li>
            <li>Drop</li>
          </ul>

          <ul className={styles.listcontainer}>
            <li>icons</li>
            <li>icons</li>
            <li>icons</li>
          </ul>

        </div>
    );
};


