import React from "react";

import styles from "./testimonials.module.css";

import Testimonial from "./Testimonial";
import { Carousel as Slider } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import timothy from "./timothy.jpg";

const Testimonials = () => {
  const testimonial = {
    name: "Timothy",
    role: "Founder of the Global Forest Alliance",
    quote:
      "I am very pleased to say that my experience of associating with NAYSAAC has been excellent and I feel it is a privilege too. My appreciation for the excellent work NAYSAAC is carrying out in combating Climate Change. By providing trees, livestock and water resources to local communities, NAYSAAC is investing in a better future for Cameroon.",
    image: timothy,
  };

  return (
    <section className={styles.body}>
      <aside className={`${styles.wrapper} testimonials`}>
        <h1>What People Say</h1>
        <hr />
        <Slider showArrows={false} autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={true} showThumbs={false} swipeable={true} interval={5000} showIndicators={false}>
          {[...Array(3)].map((_, i) => {
            return <Testimonial key={i} {...testimonial} />;
          })}
        </Slider>
      </aside>
    </section>
  );
};

export default Testimonials;
