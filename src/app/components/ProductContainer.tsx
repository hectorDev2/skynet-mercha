'use client'
import { useFetch } from '@/index'
import { Products } from './containers/Products/ProductsExclusive'

export const ProductContainer = () => {
  const { products } = useFetch()

  return (
    <>
      <Products exclusive={true} tshirts={products} />

      <Products tshirts={products} />
    </>
  )
}
