'use client'
import React, {useEffect, useState} from 'react'
import Links from "@/components/navbar/Links";
import Reveal from "@/components/animations/Reveal";
import Logo from "@/components/navbar/Logo";
import Menu from "@/components/navbar/Menu";
import Link from "next/link";

const Navbar = () => {
  const [navClass, setNavClass] = useState(false)


  useEffect(() => {
    const setNavProperty = () => {
      if(window.scrollY>=10){
        setNavClass(true)
      } else{
        setNavClass(false)
      }
    }

    window.addEventListener("scroll", setNavProperty)
    return () => {
      window.removeEventListener("scroll", setNavProperty)
    }
  })
  return (
    <div
      className={'w-screen flex border-b-2 border-b-white h-24 items-center fixed top-0 ease-in duration-200 z-[100]'}
      style={navClass ? {height: "5rem", background: "#ffffff", boxShadow: "0 0 11px 0px rgb(49 49 49)"} : {height: "6rem", background: "none"}}
    >
      <div className={'max-w-[1200px] mx-auto flex justify-between w-full px-8 font-medium items-center'}>
        <Reveal className={'text-orange-500 cursor-pointer text-xl font-bold'}>
          <Logo><Link href={'/'}>Techy</Link></Logo>
        </Reveal>
        <Reveal className={'hidden gap-4 md:flex'}>
          <Links />
        </Reveal>
        <Reveal className={'flex items-center justify-center gap-4'}>
          <Link href={'/contact'} className={'text-white bg-black px-4 py-2 rounded-full'}>Contact Us</Link>
          <Menu/>
        </Reveal>
      </div>
    </div>
  )
}
export default Navbar
