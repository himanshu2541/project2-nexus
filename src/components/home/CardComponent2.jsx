import React from 'react'
import {FaArrowRight} from "react-icons/fa6";
import styles from './cardComponent.module.css'

const CardComponent2 = ({serialNumber='01', content = 'Lorem Ipsum', bg=''}) => {
  return (
    <div className={`flex p-8 gap-4 cursor-default ${bg} border-t-2 border-black w-full sm:w-1/2 ${styles.container}`}>
      <span className={'text-gray-600 text-xl font-semibold'}>
        {serialNumber}.
      </span>
      <span className={'font-bold text-2xl'}>
        {content}
        <FaArrowRight className={`${styles.arrow}`}/>
      </span>
    </div>
  )
}
export default CardComponent2
