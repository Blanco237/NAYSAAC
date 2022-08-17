import React from "react";
import Title from "../../components/shared/Title/Title";

import styles from "./service.module.css";

import service from "./data";
import Card from "../../components/services/Card/Card";

const Services = () => {
  return (
    <div className={styles.body}>
      <Title title={`Services`} />
      <div className={styles.services}>
        {[...Array(3)].map((_, i) => (
          <Card key={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
