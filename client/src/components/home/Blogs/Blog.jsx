import React from "react";
import { Link } from "react-router-dom";

import styles from "./blog.module.css";

import { FaArrowRight } from "react-icons/fa";

const Blog = ({ title, date, image, link }) => {
  return (
    <aside className={styles.body}>
      <span className={styles.date}>{date}</span>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <Link to={link}>
          <h2>{title}</h2>
        </Link>
        <Link to={link}>
          <p className={styles.link}>
            Continue Reading
            <span>
              <FaArrowRight />
            </span>
          </p>
        </Link>
      </div>
    </aside>
  );
};

export default Blog;
