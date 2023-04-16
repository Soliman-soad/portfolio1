import React from 'react'
import portfolio from "../../../assets/soad-removebg-preview.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
<section className="home" id="home">
    <h3>HI THERE !</h3>
    <h1>I'M <span>Md. Soliman Alam</span></h1>
</section>
    </motion.div>
  )
}

export default Home