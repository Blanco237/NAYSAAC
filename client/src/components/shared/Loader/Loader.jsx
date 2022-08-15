import React from "react";

import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
