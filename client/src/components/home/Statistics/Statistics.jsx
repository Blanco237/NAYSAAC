import React from 'react'

import styles from './stats.module.css';

import tree from './004-tree-white.png';
import elephant from './002-elephant-white.png';
import water from './003-water-white.png';


const Statistics = () => {
  return (
    <section className={styles.body}>
        <div className={styles.statistic}>
            <div className={styles.image}>
                <img src={tree} alt=""/>
            </div>
            <h1>10,000+</h1>
            <p>Trees Planted</p>
        </div>
        <div className={`${styles.statistic} ${styles.main}`}>
            <div className={styles.image}>
                <img src={elephant} alt=""/>
            </div>
            <h1>3000+</h1>
            <p>Animals Saved</p>
        </div>
        <div className={styles.statistic}>
            <div className={styles.image}>
                <img src={water} alt=""/>
            </div>
            <h1>1000+</h1>
            <p>Water Resources</p>
        </div>
    </section>
  )
}

export default Statistics