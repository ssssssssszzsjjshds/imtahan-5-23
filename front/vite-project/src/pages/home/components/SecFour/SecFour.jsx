import React from "react";
import styles from "./SecFour.module.css";

const SecFour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-2.png?v=1733907245&width=375"
            alt=""
          />
          <p>Smart Home Assistant</p>
          <div className={styles.rate}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>
            “Thanks guys, keep up the good work! Great job, I will definitely be
            ordering again! Thanks guys, keep up the good work! Garden was worth
            a fortune to my company.”
          </p>
          <span>Michael L.</span>
          <h5>London, UK</h5>
        </div>
        <div className={styles.card}>
          <img
            src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-4.png?v=1733907264&width=375"
            alt=""
          />
          <p>Smart Home Assistant</p>
          <div className={styles.rate}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>
            “Thanks guys, keep up the good work! Great job, I will definitely be
            ordering again! Thanks guys, keep up the good work! Garden was worth
            a fortune to my company.”
          </p>
          <span>Michael L.</span>
          <h5>London, UK</h5>
        </div>
      </div>
    </div>
  );
};

export default SecFour;
