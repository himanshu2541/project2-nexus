import React from 'react'

const CardType1 = ({title='Lorem' ,desc='Lorem Ipsum'}) => {
  return (
    <div className={'min-h-64 bg-white text-black shadow-md shadow-gray-200 rounded-2xl p-4 flex flex-col'}>
      <div className={'font-bold text-xl border-b-[1px] border-b-gray-400'}>{title}</div>
      <div>{desc}</div>
    </div>
  )
}
export default CardType1
