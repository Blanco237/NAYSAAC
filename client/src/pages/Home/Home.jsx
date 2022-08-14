import React from 'react'
import About from '../../components/home/About/About'
import Carousel from '../../components/home/Carousel/Carousel'
import SectionOne from '../../components/home/SectionOne/SectionOne'
import Statistics from '../../components/home/Statistics/Statistics'
import SDGS from '../../components/home/SDGS/SDGS'
import Testimonials from '../../components/home/Testimonials/Testimonials'
import Blogs from '../../components/home/Blogs/Blogs'

import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.body}>
            <Carousel />
            <SectionOne />
            <About />
            <Statistics />
            <SDGS />
            <Testimonials />
            <Blogs />
        </div>
    )
}

export default Home
