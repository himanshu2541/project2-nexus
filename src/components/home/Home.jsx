import React from 'react'
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Image1 from '@/assets/image1.jpg'
import Image2 from '@/assets/Image2.jpg'
import CardComponent1 from "@/components/home/CardComponent1";
import Link from "next/link";
import CardComponent2 from "@/components/home/CardComponent2";

const Home = () => {
  return (
    <>
      <Hero/>

      {/*Section 1*/}
      <div className={'grid grid-cols-1 md:grid-cols-2 my-8 gap-8 w-full place-items-center px-4'}>
        <div
          className={'w-auto h-auto rounded-xl overflow-hidden duration-150 ease-in hover:shadow-gray-600 hover:shadow-sm'}>
          <Image
            src={Image1}
            alt={'..'}
            priority={false}
            placeholder={'blur'}
            className={'hover:scale-[1.02] duration-150 ease-in'}
          />
        </div>
        <div className={'flex w-full flex-col gap-4 items-center md:items-start'}>
          <CardComponent1 title={'300+'} desc={'Coverage'}/>
          <div className={'h-0.5 w-full bg-black'}/>
          <div className={'flex gap-8'}>
            <CardComponent1 title={'50+'} desc={'Customers'}/>
            <CardComponent1 title={'25+'} desc={'Partners'}/>
          </div>
        </div>
      </div>

      {/*Section 2*/}
      <div className={'flex flex-col-reverse lg:flex-row mx-4 mt-12 bg-black text-white rounded-2xl p-8 gap-8 mb-4'}>
        <div className={'flex justify-center flex-col text-center  lg:text-right gap-4'}>
          <span className={'text-3xl sm:text-4xl md:text-5xl'}>Our Technology and Services</span>
          <span className={'text-sm sm:text-md md:text-lg'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu dolor sit amet diam lobortis condimentum.Mauris eu dolor sit amet diam lobortis condimentum.
          </span>
          <span>
            <Link href={'/product'} className={'bg-white rounded-md text-black px-4 py-2'}>See Products</Link>
          </span>
        </div>
        <div className={'h-[13rem] sm:h-[15rem] md:h-[20rem] w-auto overflow-hidden '}>
          <Image src={Image2} alt={'...'} className={'object-cover translate-y-[-35%] scale-75 hover:scale-[0.8] duration-200 ease-in'}/>
        </div>
      </div>

    {/* Section 3*/}

      <div className={'grid px-4 my-24'}>
        <div className={''}>
          <CardComponent2 serialNumber={'01'} content={'Drive Continuous Compliance'}/>
        </div>
        <div className={'flex flex-col sm:flex-row'}>
          <CardComponent2 bg={'bg-black text-white'} serialNumber={'02'} content={'Reduce Costs and Complexity'}/>
          <CardComponent2 serialNumber={'03'} content={'Build Innovative Products'}/>
        </div>
        <div className={'flex justify-end'}>
          <CardComponent2 serialNumber={'04'} content={'Differentiates the Business'}/>
        </div>
      </div>
    </>
  )
}
export default Home
