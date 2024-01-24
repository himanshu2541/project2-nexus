import React from 'react'
import Image5 from '@/assets/Image5.jpg'
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const Product = () => {
  return (
    <div className={'min-h-screen mt-32 max-w-[1200px] px-4'}>
      <div className={''}>
        <div className={'h-[40rem] overflow-hidden rounded-3xl relative'}>
          <Image
            src={Image5}
            alt={'...'}
            priority={false}
            placeholder={'blur'}
            className={'object-cover object-center'}
          />
          <div className={'absolute bg-[#35353538] h-full w-full top-0 left-0 text-white'}>

            <div className={'container h-full w-full mx-auto px-4 flex-col gap-8 text-center'}>
              <span className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'}>
                All your tech here.
              </span>
              <span className={'w-full sm:max-w-[80%]'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget vulputate nibh. Vivamus quis ante ut eros tempus bibendum. Aliquam ante turpis, eros tempus bibendum. Aliquam ante turpis,
              </span>
            </div>

          </div>
        </div>

        <div className={'mt-12 container flex-col gap-4 text-center mx-auto'}>
          <span className={'text-2xl sm:text-3xl md:text-4xl font-semibold '}>
            Any kind of software solutions
          </span>
          <span className={'text-gray-500 w-full md:max-w-[70%]'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget vulputate nibh. Vivamus quis ante ut eros tempus bibendum. Aliquam ante turpis, eros tempus bibendum. Aliquam ante turpis,
          </span>
          <Link href={'/product'} className={'border-2 border-orange-500 rounded-lg p-4 text-orange-500 hover:bg-orange-500 hover:text-white duration-200 ease-in'}>Learn More</Link>
        </div>

        <div className={'mt-12 flex flex-col items-center gap-4'}>
          <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <Link href={'/product'} className={'border-2 border-orange-500 rounded-lg px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white duration-200 ease-in'} >See More</Link>
        </div>

      </div>
    </div>
  )
}
export default Product
