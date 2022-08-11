import React from "react";
import { Link } from "react-router-dom";

import styles from "./carousel.module.css";
import slides from "./data";

import { Carousel as Slider } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carousel = () => {

    

  return (
    <Slider showArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={false} showThumbs={false} swipeable={false} interval={5000} showIndicators={window.innerWidth >= 768 } >
        {
             slides.map((slide, index) => (
                <section className={styles.body} key={slide.title+index}>
          <div className={styles.slide}>
            <div className={styles.image}>
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className={`${styles.content} my-carousel`}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <div className={styles.divider}></div>
              {slide.button && (
                <Link to={slide.button.link} className={styles.link}>
                  <button>{slide.button.text}</button>
                </Link>
              )}
            </div>
          </div>
        </section>
             ))
        }
    </Slider>
  );
};

export default Carousel;
