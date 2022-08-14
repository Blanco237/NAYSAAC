import React from "react";

import styles from "./about.module.css";

import elephants from "./elephants.jpg";
import { FaPlusCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className={styles.body}>
      <div className={styles.image}>
        <img src={elephants} alt="Elephants" />
      </div>
      <div className={styles.content}>
        <span>About Us</span>
        <h1>We are Taking Small Steps to Make Earth Better Planet</h1>
        <hr />
        <p>
          One of the serious issues faced by our modern world is environmental
          pollution, and it is one the most significant challenges that the
          world is facing in our day. Environmental pollution has existed for
          centuries.
        </p>
        <ul>
          {[
            "Protect and enhance environment for future generations.",
            "Ecosystems are imperative to maintaining a healthy planet.",
            "Help protect the environment and sustain its natural resources.",
          ].map((item, key) => {
            return (
              <li key={key}>
                <span>
                  <FaPlusCircle />
                </span>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
