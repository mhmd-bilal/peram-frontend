'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Table, TableHeader, TableRow } from '@/components/ui/table'

const ProductDetails = () => {
  // Placeholder product details
  const product = {
    id: 1,
    image: '/image.png',
    name: 'High-Quality Gadget',
    subtitle: 'Explore the fundamentals of contemporary UI design',
    startingPrice: '10.00',
    closingPrice: '15.00',
    description:
      'Detailed description of the product goes here. This product is designed to help you understand the principles of modern design systems and how to implement them effectively in your projects.'
  }

  const [bids, setBids] = useState([
    { user: 'Alice', amount: '12.00', date: '2023-10-01', time: '14:30' },
    { user: 'Bob', amount: '13.00', date: '2023-10-02', time: '15:00' }
  ])

  const [newBid, setNewBid] = useState({ user: '', amount: '' })
  const [sortOrder, setSortOrder] = useState('asc')

  const handleBidChange = (e) => {
    const { name, value } = e.target
    setNewBid({ ...newBid, [name]: value })
  }

  const handleBidSubmit = (e) => {
    e.preventDefault()
    const date = new Date().toISOString().split('T')[0]
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
    setBids([...bids, { ...newBid, date, time }])
    setNewBid({ user: '', amount: '' }) // Reset form
  }

  const sortedBids = [...bids].sort((a, b) => {
    if (sortOrder === 'asc') {
      return parseFloat(a.amount) - parseFloat(b.amount)
    } else {
      return parseFloat(b.amount) - parseFloat(a.amount)
    }
  })

  return (
    <div className='max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
      {/* Left Side: Product Details */}
      <div>
        <h1 className='text-3xl font-bold text-center mb-4'>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-auto rounded-lg shadow-lg mb-6'
        />
        <h2 className='text-xl font-semibold text-center mb-2'>
          {product.subtitle}
        </h2>
        <p className='text-lg text-center text-gray-700 mb-4'>
          Price:{' '}
          <span className='font-bold text-green-600'>
            ${product.startingPrice} - ${product.closingPrice}
          </span>
        </p>
        <p className='text-gray-600 mb-4'>{product.description}</p>
      </div>

      {/* Right Side: Bid Details */}
      <div className='bg-gray-100 p-4 rounded-lg shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Bid Details</h2>

        {/* Sort Functionality */}
        <div className='mb-4'>
          <label className='mr-2'>Sort by Amount:</label>
          {/* <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className='border border-gray-300 p-2 rounded'
          >
            <SelectItem value='asc'>Lowest to Highest</SelectItem>
            <SelectItem value='desc'>Highest to Lowest</SelectItem>
          </Select> */}
        </div>

        <div className='overflow-x-auto mb-4'>
          {/* <Table className='min-w-full border-collapse border border-gray-300'>
            <Table.Head>
              <Table.Row>
                <TableHeader className='border border-gray-300 p-2'>
                  User
                </TableHeader>
                <TableHeader className='border border-gray-300 p-2'>
                  Bid Amount
                </TableHeader>
                <TableHeader className='border border-gray-300 p-2'>
                  Date
                </TableHeader>
                <TableHeader className='border border-gray-300 p-2'>
                  Time
                </TableHeader>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {sortedBids.map((bid, index) => (
                <TableRow key={index}>
                  <Table.Cell className='border border-gray-300 p-2'>
                    {bid.user}
                  </Table.Cell>
                  <Table.Cell className='border border-gray-300 p-2'>
                    ${bid.amount}
                  </Table.Cell>
                  <Table.Cell className='border border-gray-300 p-2'>
                    {bid.date}
                  </Table.Cell>
                  <Table.Cell className='border border-gray-300 p-2'>
                    {bid.time}
                  </Table.Cell>
                </TableRow>
              ))}
            </Table.Body>
          </Table> */}
        </div>

        {/* Bid Placing Form */}
        <h3 className='text-lg font-semibold mb-2'>Place a Bid</h3>
        <form onSubmit={handleBidSubmit} className='flex flex-col'>
          <Input
            type='text'
            name='user'
            placeholder='Your Name'
            value={newBid.user}
            onChange={handleBidChange}
            className='border border-gray-300 p-2 mb-2 rounded'
            required
          />
          <Input
            type='number'
            name='amount'
            placeholder='Bid Amount'
            value={newBid.amount}
            onChange={handleBidChange}
            className='border border-gray-300 p-2 mb-2 rounded'
            required
          />
          <Button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300'
          >
            Submit Bid
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ProductDetails
