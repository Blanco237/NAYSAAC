import React from 'react'

import styles from './one.module.css';

import donate from './01-donate.png';
import medal from './medal-lt.png';
import torch from './003-torch.png';


const SectionOne = () => {
  return (
    <section className={styles.body}>
        <div className={styles.featureWrapper}>
            <div className={styles.featureImage}>
                <img src={donate} alt=""/>
            </div>
            <h1>Give Donation</h1>
            <p>Your contribution used locally to help charitable causes and support the organization, Support.</p>  
        </div>
        <div className={`${styles.featureWrapper} ${styles.main}`}>
            <div className={styles.featureImage}>
                <img src={medal} alt=""/>
            </div>
            <h1>Become a Volunteer</h1>
            <p>Your contribution used locally to help charitable causes and support the organization, Support.</p>  
        </div>
        <div className={styles.featureWrapper}>
            <div className={styles.featureImage}>
                <img src={torch} alt=""/>
            </div>
            <h2>Quick Fundraise</h2>
            <p>Your contribution used locally to help charitable causes and support the organization, Support.</p>  
        </div>
    </section>
  )
}

export default SectionOne