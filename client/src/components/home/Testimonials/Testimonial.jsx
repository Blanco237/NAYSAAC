import React from "react";

import styles from "./testimonial.module.css";

import { FaQuoteRight } from 'react-icons/fa'

const Testimonial = ({ name, role, quote, image }) => {
  return <div className={styles.body}>
    <span className={styles.quote}><FaQuoteRight /></span>
    <div className={styles.person}>
        <div className={styles.avatar}>
            <img src={image} alt={name} />
        </div>
        <div className={styles.details}>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    </div>
    <div className={styles.message}>
        <p>{quote}</p>
    </div>
  </div>;
};

export default Testimonial;
