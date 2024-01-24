"use client"
import React, {useState} from 'react'
import {motion} from "framer-motion";
import Links from "@/components/navbar/Links";

const Menu = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const MenuVariants = {
    closed: {justifyContent: "space-between"},
    open: {justifyContent: "center"}
  }

  const NavVariants = {
    closed: {opacity: 0, x: "100%"},
    open: {opacity: 1, x: 0}
  }

  return (
    <div className={'block md:hidden'}>
        <motion.div
          variants={MenuVariants}
          initial={'closed'}
          animate={mobileNav ? "open" : "closed"}
          className={'flex flex-col h-8 w-8 p-1 cursor-pointer z-[100] relative hover:bg-orange-400 duration-200 ease-in'}
          onClick={() => setMobileNav(prev => !prev)}
        >

          <motion.span variants={{
            closed: {rotate: 0, y: 0},
            open: {rotate: 45, y: 2}
          }} className={'w-full h-[2px] bg-black'}/>
          <motion.span variants={{
            closed: {opacity: 1, x: 0},
            open: {opacity: 0, x: -25}
          }} className={'w-full h-[2px] bg-black'}/>
          <motion.span variants={{
            closed: {rotate: 0, y: 0},
            open: {rotate: -45, y: -2}
          }} className={'w-full h-[2px] bg-black'}/>
        </motion.div>


      <motion.div
        variants={NavVariants}
        animate={mobileNav ? 'open' : 'closed'}
        className={'fixed inset-0 bg-[#ffe7d2] opacity-0 z-[50] flex items-center justify-center flex-col gap-4 text-2xl'}
        onClick={() => {
          setMobileNav(false)
        }}
      >
      <Links />
      </motion.div>
    </div>
  )
}
export default Menu
