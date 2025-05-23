import React from "react";
import styles from "./SecTwo.module.css";

const SecTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <i class="fa-solid fa-truck"></i>
          <div className={styles.col}>
            <p>FREE SHIPPING</p>
            <span>On all orders over $75.00</span>
          </div>
        </div>
        <div className={styles.card}>
          <i class="fa-solid fa-gift"></i>
          <div className={styles.col}>
            <p>Money Back</p>
            <span>30 days money back guarantee</span>
          </div>
        </div>
        <div className={styles.card}>
          <i class="fa-solid fa-crown"></i>
          <div className={styles.col}>
            <p>FRIENDLY SUPPORT</p>
            <span>Team always ready for you</span>
          </div>
        </div>
        <div className={styles.card}>
          <i class="fa-regular fa-credit-card"></i>
          <div className={styles.col}>
            <p>FREE SHIPPING</p>
            <span>On all orders over $75.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
