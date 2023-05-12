import React from 'react'

export const TransferCard = () => {
  return (
    <div className='flex flex-col bg-white p-5 mt-20 border border-primary-gray font-vazir'>
      <img src="./assets/images/transfer-card-bg.png" alt="" />
      <div className='mt-5'>
        <img src="./assets/images/transfer-distance.svg" alt="" />
      </div>

      <div className='flex items-center justify-between border border-primary-gray mt-8 px-2 '>
        <div className='flex flex-col'>
          <span className='text-primary-green-3 '>2,500,000 تومان</span>
          <span className='text-primary-brown-3 '>درخواست</span>
        </div>
        <span>(پنج نفره)</span>
        <img src="./assets/icons/van-1.svg" alt="" />
      </div>

      <div className='flex items-center justify-between border border-primary-gray mt-8 px-2 '>
        <div className='flex flex-col'>
          <span className='text-primary-green-3 '>2,500,000 تومان</span>
          <span className='text-primary-brown-3 '>درخواست</span>
        </div>
        <span>(یازده نفره)</span>
        <img src="./assets/icons/van-2.svg" alt="" />
      </div>
    </div>
  )
}
