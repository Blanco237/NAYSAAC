import React from "react";
import { Link } from "react-router-dom";

import { FaAngleRight } from 'react-icons/fa'

import { footerLinks } from "../../../utils/Links";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.body}>
      <section className={styles.logo}>
        <h1>NAYSAAC</h1>
        <p>
          NAYSAAC is a Non-Profit Organization Aimed at Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quibusdam nostrum quos, eum dolores
          quaerat magni eos accusantium quas quidem nemo ex debitis incidunt
          commodi eius? Accusantium fugit nisi corrupti possimus.
        </p>
        <div className={styles.social}>
          {footerLinks.Social.map((link, key) => {
            return (
              <Link to={link.path} key={key} className={styles.link}>
                <span>{link.icon}</span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className={styles.quickLinks}>
        <h2>Quick Links</h2>
        <hr/>
        <div className={styles.links}>
          {footerLinks.QuickLinks.map((link, key) => {
            return (
              <Link to={link.path} key={key} className={styles.link}>
                <span><FaAngleRight/></span> {link.name}
              </Link>
            );
          })}
        </div>
      </section>
      <section className={styles.blog}>
        <h2>Blog</h2>
        <hr/>
        <div className={styles.links}>
          {footerLinks.Blog.map((link, key) => {
            return (
              <Link to={link.path} key={key} className={styles.link}>
                <span><FaAngleRight/></span> {link.name}
              </Link>
            );
          })}
        </div>
      </section>
      <section className={styles.contact}>
        <h2>Get In Touch</h2>
        <hr/>
        <p>If you want More information about us, just enter your email</p>
        <input type="email" placeholder="Email Address" />
        <button>Go</button>
      </section>
    </footer>
  );
};

export default Footer;
