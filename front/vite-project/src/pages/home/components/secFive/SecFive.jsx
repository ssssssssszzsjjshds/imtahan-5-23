import React from "react";
import styles from "./SecFive.module.css";
import { useNavigate } from "react-router";

const SecFive = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/www.instagram.com");
  };
  return (
    <div className={styles.container}>
      <h1>Follow @Rivon</h1>
      <p>The best quality products are waiting for you & choose it now.</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.inside}>
            <button onClick={handleClick}>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.inside}>
            <button onClick={handleClick}>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.inside}>
            <button onClick={handleClick}>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.inside}>
            <button onClick={handleClick}>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
        <div className={styles.card5}>
          <div className={styles.inside}>
            <button onClick={handleClick}>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecFive;
