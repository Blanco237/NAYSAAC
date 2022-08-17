import React from 'react'

import styles from './title.module.css'

const Title = ({ title }) => {
  return (
    <section className={styles.body}>
        <h1>{title}</h1>
    </section>
  )
}

export default Title