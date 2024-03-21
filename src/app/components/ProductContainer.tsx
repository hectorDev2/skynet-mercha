'use client'
import { Products } from './containers/Products'
import { ProductsExclusive } from './containers/Products/ProductsExclusive'
import { useFetch } from '@/index'

export const ProductContainer = () => {
  const { products } = useFetch()

  return (
    <>
      <ProductsExclusive tshirts={products} />
      <Products tshirts={products} />
    </>
  )
}
