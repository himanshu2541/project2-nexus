"use client"
import React from 'react'
import {motion} from "framer-motion";

const Logo = ({children}) => {
  const variants = {
    zoom: {scale: 1.06},
    initial: {scale: 1}
  }
  return (
    <motion.div whileHover={'zoom'} initial={'initial'} variants={variants}>{children}</motion.div>
  )
}
export default Logo
