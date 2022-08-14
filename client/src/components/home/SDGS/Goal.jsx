import React from 'react'

import styles from './goal.module.css'

const Goal = ({ title, description, image, theme }) => {

    const themeStyle = {
        '--theme-color': theme,
    }

  return (
    <aside style={themeStyle} className={styles.body}>
        <span className={styles.decor}></span>
        <div className={styles.image}>
            <img src={image} alt={title}/>
        </div>
        <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </aside>
  )
}

export default Goal