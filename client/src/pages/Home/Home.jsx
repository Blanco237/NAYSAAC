import React from 'react'
import Carousel from '../../components/home/Carousel/Carousel'

import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.body}>
            <Carousel />
        </div>
    )
}

export default Home
