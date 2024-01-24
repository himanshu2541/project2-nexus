"use client"
import React from 'react'
import {motion} from "framer-motion";

const Reveal = ({children, className=''}) => {
  return (
    <motion.div
      className={className}
      initial={'hidden'}
      variants={{
        hidden: {opacity: 0, y: 15},
        show: {opacity: 1, y: 0}
      }}
      animate={'show'}
      transition={{delay: 0.1, duration: 0.2, staggerChildren: 0.05}}
    >{children}</motion.div>
  )
}
export default Reveal
