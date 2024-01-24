import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Image3 from '@/assets/Image3.jpg'
import Image4 from '@/assets/Image4.jpg'
import {FaArrowRight} from "react-icons/fa6";
import styles from './about.module.css'
import ScrollDown from "@/components/utilities/ScrollDown";
import CardType1 from "@/components/utilities/CardType1";


const PointsType1 = ({SerialNumber='01', Title = 'Lorem Ipsum'}) => {
  return(
    <>
      <div className={`flex gap-4 border-b-[1px] border-b-gray-950 pb-8 ${styles.container}`}>
        <span className={'font-bold text-gray-600'}>{SerialNumber}.</span>
        <span className={'text-2xl font-semibold flex gap-2'}>{Title} <FaArrowRight className={`${styles.arrow}`}/></span>
      </div>
    </>
  )
}
const About = () => {
  return (
    <>
      {/* Section 1*/}
      <div className={'h-screen flex flex-col items-center justify-center px-8'}>

        <div className={'flex flex-col items-center gap-6'}>
        <span
          className={'text-5xl md:text-6xl font-semibold md:font-bold duration-75 ease-in bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent'}
        >
          About Us
        </span>
          <div className={'flex flex-col items-center gap-4'}>
          <span className={'text-center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget vulputate nibh. Vivamus quis ante ut eros tempus bibendum. Aliquam ante turpis,  facilisis commodo enim at, vulputate cursus est. Donec ac ullamcorper lectus, at euismod enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat purus sit amet ex egestas, ut consectetur diam dictum.
          </span>
            <Link
              href={'/contact'}
              className={'px-4 py-2 bg-gradient-to-br from-zinc-900 to-zinc-600 rounded-full text-white w-fit'}>
              Contact Us
            </Link>
          </div>
        </div>

        <ScrollDown className={'absolute bottom-10 text-3xl'}/>
      </div>

      {/*Section 2*/}
      <div className={'px-4'}>
        <div className={'flex flex-col md:flex-row gap-8 my-8'}>
          <div className={'w-full md:w-1/2 h-fit rounded-2xl overflow-hidden'}>
            <Image
              src={Image3}
              alt={''}
              placeholder={'blur'}
              priority={false}
              className={'hover:scale-105 duration-200 ease-in'}
            />
          </div>
          <div className={'flex-1 flex gap-8 flex-col'}>
            <PointsType1/>
            <PointsType1 SerialNumber={'02'}/>
            <PointsType1 SerialNumber={'03'}/>
            <PointsType1 SerialNumber={'04'}/>
          </div>
        </div>
      </div>


      {/*  Section 3*/}

      <div className={'px-4'}>
        <div
          className={'bg-[#2c284e] w-full rounded-2xl my-12 text-white p-8 flex flex-col items-center justify-center text-center'}>
          <div className={'text-4xl sm:text-5xl md:text-6xl border-b-[0.5px] border-b-gray-100 pb-8 font-bold'}>Welcome to world
            of AI
          </div>
          <div className={'mt-8'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis congue augue. Integer enim lacus, varius
            a nunc vitae, laoreet posuere nunc. Ut fringilla sagittis risus nec aliquet. Integer eu urna dui. Quisque
            sagittis neque nec tortor consectetur tincidunt. Nulla pellentesque sit amet lectus id pharetra. Nam
            tincidunt vel lectus sed bibendum. Sed at dapibus orci.
          </div>
          <div className={'w-full sm:w-3/4 md:w-1/2 overflow-hidden'}>
            <Image src={Image4} alt={'...'} placeholder={'blur'} priority={false} className={'scale-105'}/>
          </div>
        </div>
      </div>


    {/*  Section 4*/}
      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 my-12'}>
        <CardType1 />
        <CardType1 />
        <CardType1 />
        <CardType1 />
      </div>
    </>
  )
}
export default About
