import React from 'react'
import {FaFacebook, FaLinkedin, FaLocationDot, FaTwitter} from "react-icons/fa6";
import Link from "next/link";
import {IoIosMail} from "react-icons/io";

const Footer = () => {
  return (
    <div className={'bg-gradient-to-br from-[#181818] to-[#1a1a1a] text-white px-4 py-16'}>
      <div
        className={'flex flex-col gap-4 sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto border-b-[1px] border-gray-400 pb-8'}>
        <span className={'text-2xl md:text-3xl lg:text-4xl'}>
          We are a leading insurtech <br/> company driving save
        </span>
        <div className={'flex text-xl md:text-2xl lg:text-3xl gap-4'}>
          <Link href={'/'} className={'border-white border-2 rounded-full p-3 hover:bg-white hover:text-black duration-200 ease-in'}>
            <FaLinkedin/>
          </Link>
          <Link href={'/'} className={'border-white border-2 rounded-full p-3 hover:bg-white hover:text-black duration-200 ease-in'}>
            <FaFacebook/>
          </Link>
          <Link href={'/'} className={'border-white border-2 rounded-full p-3 hover:bg-white hover:text-black duration-200 ease-in'}>
            <FaTwitter/>
          </Link>
        </div>
      </div>

      <div className={'max-w-[1200px] mx-auto px-4 mt-8 flex flex-col md:flex-row gap-4 justify-between'}>

        <div className={'flex flex-col gap-4'}>
          <span className={'font-medium text-xl'}>Company</span>
          <div className={'text-gray-300 flex gap-2'}>
            <FaLocationDot />
            <span>397, ABC Road <br /> XYZ, Banglore</span>
          </div>
          <div className={'text-gray-300 flex gap-2'}>
            <IoIosMail />
            <Link href={'mailto:abc@gmail.com'}>techy@gmail.com</Link>
          </div>

          <div className={'text-gray-300 flex gap-2'}>
            <IoIosMail />
            <Link href={'tel:+46-841094000'}>+46 8 4109 4000</Link>
          </div>
        </div>

        <div className={'flex flex-col md:flex-row gap-8'}>

          <div className={'flex flex-col gap-4'}>
            <span className={'font-medium text-xl'}>Services</span>
            <div className={'text-gray-300 flex flex-col gap-2'}>
              <p>Prudent Revolution</p>
              <p>How we deliver</p>
              <p>How it works</p>
              <p>Customer</p>
            </div>
          </div>

          <div className={'flex flex-col gap-4'}>
            <span className={'font-medium text-xl'}>Services</span>
            <div className={'text-gray-300 flex flex-col gap-2'}>
              <p>Prudent Revolution</p>
              <p>How we deliver</p>
              <p>How it works</p>
              <p>Customer</p>
            </div>
          </div>

          <div className={'flex flex-col gap-4'}>
            <span className={'font-medium text-xl'}>Services</span>
            <div className={'text-gray-300 flex flex-col gap-2'}>
              <p>Prudent Revolution</p>
              <p>How we deliver</p>
              <p>How it works</p>
              <p>Customer</p>
            </div>
          </div>
        </div>

      </div>

      <div className={'border-t-[1px] border-gray-400 mt-8 text-sm font-extralight flex items-center justify-end max-w-[1200px] mx-auto'}>
        <span>Copyright @ 2024 All rights are reserved</span>
      </div>
    </div>
  )
}
export default Footer
