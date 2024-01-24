import React from 'react'
import {IoIosArrowDown} from "react-icons/io";
import styles from './utilities.module.css'

const ScrollDown = ({className}) => {
  return (
    <div className={`${styles.scroll_down} ${className}`}>
      <IoIosArrowDown/>
    </div>
  )
}
export default ScrollDown
