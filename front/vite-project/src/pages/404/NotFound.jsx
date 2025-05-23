import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <Link to='/'>Go Home</Link>
    </div>
  );
};

export default NotFound;
