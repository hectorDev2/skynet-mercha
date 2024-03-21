'use client'
import { useEffect, useState } from 'react'
import { Products } from './containers/Products'
import { ProductsExclusive } from './containers/Products/ProductsExclusive'
import { getTshirts } from '@/utils/fetch'

export const ProductContainer = () => {
  const [products, setProducts] = useState<any>([])

  // getTshirts()
  useEffect(() => {
    getTshirts().then(res => {
      console.log(res)

      setProducts(res.tshirts)
    })
    return () => {
      setProducts([])
    }
  }, [])
  console.log(products)

  return (
    <>
      <ProductsExclusive tshirts={products} />
      <Products tshirts={products} />
    </>
  )
}
