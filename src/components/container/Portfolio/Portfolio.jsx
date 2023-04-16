import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workNavs } from "../../../Data";
import { workImages } from '../../../Data';
import {FiGithub, FiEye} from "react-icons/fi"
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works,setWorks] = useState([])
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;

      })
      setWorks(newWork)
    }
  }, [tab])
  
  const activeTab = (e,index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>My Work</span>
            <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
             key={work.id}
            >
              <div className='workBack'>
              <img src={work.img} alt="workImg" />
              </div>
              <div className='workFront'>
                <div className='hoverImg' style={{backgroundImage: `url(${work.img})`}}>
              
                </div>
              <motion.div
                initial={{opacity: 0}}  
                whileInView={{ x: [-250,0], opacity: 1 }}            
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <div>
                  <div>
                    <p>
                    {work.details}  
                    </p>
                  </div>
                  <div className='flexDisplay'>
                  <motion.a href={work.live}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  Live Link
                </motion.a>

                <motion.a href={work.gitHub}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiGithub />
                </motion.a>
                  </div>
                </div>
              </motion.div>
              </div>
              
              <div>
                
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Portfolio