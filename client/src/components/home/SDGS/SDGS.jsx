import React from "react";

import styles from "./sdg.module.css";
import Goal from './Goal'

import goals from "./data";

const SDGS = () => {
  return (
    <section className={styles.body}>
      <h1>Our Sustainable Development Goals</h1>
      <p>
        We are committed and dedicated to implementing in our communities and
        the world, the following Sustainable Development Goals (SDGs):
      </p>
      <hr />
      <div className={styles.goals}>
        {goals.map((goal) => {
          return <Goal key={goal.title} {...goal} />;
        })}
      </div>
    </section>
  );
};

export default SDGS;
