import React from "react";
import Card from "../../components/events/Card/Card";
import Title from "../../components/shared/Title/Title";

import event from "./data";

import styles from "./events.module.css";

const Events = () => {
  return (
    <section className={styles.body}>
      <Title title={`Events`} />
      <div className={styles.events}>
      {[...Array(3)].map((_, i) => (
        <Card key={i} {...event} />
      ))}
      </div>
    </section>
  );
};

export default Events;
