import React from 'react'
import { pb } from 'shared/api'
import { Product } from '../product'
import { useProductsStore } from './producsStore'
import { Pagination } from '@mantine/core'

export const Catalog = () => {

  const {products, getAllProducts} = useProductsStore()

  React.useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className='px-4 mb-4'>
      <div className='grid grid-cols-5 gap-4'>
        {products?.items?.map((q, i) => {
          return (
            <Product key={i} product={q} />
          )
        })}
      </div>
      <div className='flex justify-center mt-4'>
        <Pagination
          total={products?.totalPages}
          value={products?.page}
        />
      </div>
    </div>
  )
}
