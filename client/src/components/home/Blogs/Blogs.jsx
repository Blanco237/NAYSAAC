import React from "react";

import styles from "./blogs.module.css";

import Blog from "./Blog";
import planting from "./planting.jpg";

const Blogs = () => {
  const blog = {
    title: "How Planting Trees extends your Lifespan",
    date: "July 14, 2021",
    image: planting,
    link: "#",
  };

  return (
    <section className={styles.body}>
      <h1>Recent Blog Post</h1>
      <hr />
      <div className={styles.blogs}>
        {
            [...Array(3)].map((_, i) => {
                return <Blog key={i} {...blog} />;
            })
        }
      </div>
    </section>
  );
};

export default Blogs;
