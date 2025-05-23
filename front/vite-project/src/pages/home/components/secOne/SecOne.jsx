import React from "react";
import styles from "./SecOne.module.css";
import { useNavigate } from "react-router";

const SecOne = () => {const navigate = useNavigate();

    const handleClick = () => {
navigate('/collections');
};
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.textscontainer}>
          <div className={styles.texts}>
            <p>ELEGANCE IS ELIMINATION</p>
            <h1>Stay Ahead of <br />The Trends</h1>
            <span>Tell your brand's story through images</span>
            <button onClick={handleClick}>
              COLLECTIONS <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecOne;
