/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'
import { tShirts } from '../../../types/index'

export const Content = ({ tShirt }: { tShirt: tShirts }) => {
  return (
    <main>
      {/* <!-- product section --> */}
      <section className='section-center product-section my-[150px] text-white'>
        <section className='product-component'>
          {/* <!-- image gallery --> */}
          <ProductGallery images={tShirt?.image} />
          {/* <!--product description --> */}
          <ProductInfo info={tShirt} />
        </section>
      </section>
      {/* <!-- end of product section --> */}
    </main>
  )
}
