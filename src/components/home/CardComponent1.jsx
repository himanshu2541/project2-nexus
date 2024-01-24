import React from 'react'

const CardComponent1 = ({title, desc}) => {
  return (
    <div className={'flex flex-col'}>
      <span className={'font-bold text-3xl text-gray-950'}>{title}</span>
      <span className={'font-medium text-xl text-gray-600'}>{desc}</span>
    </div>
  )
}
export default CardComponent1
