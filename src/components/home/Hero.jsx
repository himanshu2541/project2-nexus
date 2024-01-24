import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './Hero.css'
import ScrollDown from "@/components/utilities/ScrollDown";

const Hero = () => {
  return (
    <div className={'flex w-full items-center justify-center h-screen flex-col max-w-[1200px] mx-auto text-center px-4'}>
      <span className={'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#f9b16e] to-[#f68080] bg-clip-text text-transparent'}>
        We build Softwares
      </span>
      <span className={'text-md sm:text-lg md:text-xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu dolor sit amet diam lobortis condimentum.Mauris eu dolor sit amet diam lobortis condimentum.
      </span>
        <button className={'bg-gradient-to-br from-[#f7ba2c] to-[#ea5459] rounded-full px-4 py-2 text-white flex gap-2 items-center justify-center learn-more mt-4'}>
          <span>Learn More</span>
          <FaArrowRight className={'arrow'}/>
        </button>
      <ScrollDown className={'absolute bottom-10 text-3xl'}/>
    </div>
  )
}
export default Hero
