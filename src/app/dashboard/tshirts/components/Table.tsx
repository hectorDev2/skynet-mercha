'use client'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip
} from '@nextui-org/react'
import React, { Key, useEffect, useState } from 'react'
import { columns } from '../data'
import { getTshirts } from '@/utils/fetch'
import ModalButton from './ModalButton'

const statusColorMap: any = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning'
}

export default function TableComponent () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getTshirts()
      .then(res => setProducts(res.tshirts.reverse()))
      .catch(error => console.log(error))
  }, [])

  const renderCell = React.useCallback((product: any, columnKey: Key) => {
    const cellValue = product[columnKey]

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: product.images[0]?.url }}
            description={product.description}
            name={cellValue}
          >
            {product.name}
          </User>
        )
      case 'exclusive':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-sm capitalize text-default-400'>
              {product.tag}
            </p>
          </div>
        )
      case 'tag':
        return (
          <Chip
            className='capitalize'
            color={statusColorMap[product.status]}
            size='sm'
            variant='flat'
          >
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <div className='relative flex justify-center items-center gap-2'>
            <ModalButton productId={product.id} />
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table aria-label='Example table with custom cells'>
      <TableHeader columns={columns}>
        {column => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={products ?? []}>
        {(item: { id: number }) => {
          console.log(item)

          return (
            <TableRow key={item.id}>
              {columnKey => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )
        }}
      </TableBody>
    </Table>
  )
}
