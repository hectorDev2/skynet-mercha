/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'
import { TShirt } from '../../../types/index'

export const Content = ({ tShirt }: { tShirt: TShirt }) => {
  return (
    <main>
      {/* <!-- product section --> */}
      <section className='section-center product-section text-white'>
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
