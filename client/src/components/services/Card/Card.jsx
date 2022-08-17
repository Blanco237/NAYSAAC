import React from 'react'
import { Link } from 'react-router-dom'

import styles from './card.module.css'

import { FaArrowRight } from "react-icons/fa";


const Card = ({title, image, description, link}) => {
  return (
    <aside className={styles.body}>
    <div className={styles.image}>
      <img src={image} alt={title} />
    </div>
    <div className={styles.content}>
      <Link to={link}>
        <h2>{title}</h2>
      </Link>
      <p className={styles.description}>{description}</p>
      <Link to={link} className={styles.next}>
        <p className={styles.link}>
          Continue Reading
          <span>
            <FaArrowRight />
          </span>
        </p>
      </Link>
    </div>
  </aside>
  )
}

export default Card