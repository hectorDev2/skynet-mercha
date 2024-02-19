'use client'
import React, { useState } from 'react'
import { ButtonBuy } from '../shared/ButtonBuy'
import { tShirts } from '@/types'
const sizes = ['XS', 'S', 'M', 'L', 'XL']

export const ProductInfo = ({ info }: { info: tShirts }) => {
  const [sizeTarget, setSizeTarget] = useState('M')
  const [count, setCount] = useState(0)

  const handleAddToCart = () => {
    console.log('add to cart')
    setCount(count + 1)
  }
  const handleRemoveToCart = () => {
    console.log('remove to cart')
    if (count === 0) return
    setCount(count - 1)
  }
  return (
    <article className='product-description text-white'>
      <h3 className='company text-[var(--primary)]'>skynet Merch</h3>
      <h1 className='product-name '>{info?.name}</h1>
      <p className='description'>{info?.description}</p>
      <div className='product-offer'>
        <p className='price'>
          s./ {info?.price}.00 <span className='promotion'> 50% </span>
        </p>
        <p className='crossed-out-price'>$100.00</p>
      </div>
      {/* <!-- call to action--> */}
      <div className='flex gap-3'>
        {sizes.map(size => (
          <button
            style={{
              border: '2px solid white',
              color: size === sizeTarget ? 'black' : 'white',
              padding: '5px',
              width: '50px',
              background: size === sizeTarget ? 'white' : 'transparent'
            }}
            key={size}
            onClick={() => setSizeTarget(size)}
          >
            <span>{size}</span>
          </button>
        ))}
      </div>
      <div className='call-to-action'>
        <div className='flex  gap-3  cursor-pointer items-center text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900'>
          <button className='minus' onClick={handleRemoveToCart}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-minus'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#04ADFF'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l14 0' />
            </svg>
          </button>
          <span className='amount text-white'>{count}</span>
          <button className='plus' onClick={handleAddToCart}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-plus'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#04ADFF'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M12 5l0 14' />
              <path d='M5 12l14 0' />
            </svg>
          </button>
        </div>
        <ButtonBuy />
      </div>
    </article>
  )
}
