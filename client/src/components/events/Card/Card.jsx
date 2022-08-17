import React from 'react'
import { Link } from 'react-router-dom'

import styles from './card.module.css'



const Card = ({title, image, description, link, start, end}) => {
  return (
    <aside className={styles.body}>
    <div className={styles.image}>
      <img src={image} alt={title} />
    </div>
    <div className={styles.date}>
      <p>{start}</p>
      <p>{end}</p>
      </div>
    <div className={styles.content}>
      <Link to={link}>
        <h2>{title}</h2>
      </Link>
      <p className={styles.description}>{description}</p>
    </div>
  </aside>
  )
}

export default Card