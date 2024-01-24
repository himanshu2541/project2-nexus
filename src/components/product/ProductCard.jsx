import React from 'react'

const ProductCard = ({title='Lorem Ipsum', desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ivamus quis ante ut eros tempus bibendum. Aliquam ante turpis,'}) => {
  return (
    <div className={'bg-white p-8 rounded-xl min-h-64 flex flex-col gap-4'}>
      <span className={'font-bold text-2xl border-b-2 border-b-gray-400 pb-3'}>{title}</span>
      <span className={'text-gray-500'}>{desc}</span>
    </div>
  )
}
export default ProductCard
