'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead
} from '@/components/ui/table'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'

const ProductDetails = () => {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))'
    },
    mobile: {
      label: 'Mobile',
      color: 'hsl(var(--chart-2))'
    }
  }

  const product = {
    id: 1,
    image: '/image2.png',
    name: 'High-Quality Gadget',
    subtitle: 'Explore the fundamentals of contemporary UI design',
    startingPrice: '10.00',
    closingPrice: '15.00',
    contextColor: '#fd9e00',
    description:
      'Detailed description of the product goes here. This product is designed to help you understand the principles of modern design systems and how to implement them effectively in your projects.'
  }

  const [bids, setBids] = useState([
    { user: 'Alice', amount: 12.0, date: '2023-10-01', time: '14:30' },
    { user: 'Bob', amount: 13.0, date: '2023-10-02', time: '15:00' },
    { user: 'Charlie', amount: 15.0, date: '2023-10-02', time: '16:00' },
    { user: 'David', amount: 10.0, date: '2023-10-02', time: '17:00' },
    { user: 'Eve', amount: 20.0, date: '2023-10-02', time: '18:00' },
    { user: 'Frank', amount: 18.0, date: '2023-10-02', time: '19:00' }
  ])

  const [newBid, setNewBid] = useState({ user: 'David', amount: '' })
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

  const chartData = sortedBids.map((bid, index) => ({
    hour: index + 1, // Assuming each bid is an hour after the previous one
    amount: bid.amount
  }))

  return (
    <div className='max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* Left Side: Product Details */}
      <div>
        <h1 className='text-3xl font-bold text-left mb-4'>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-auto rounded-sm shadow-lg shadow-${product.contextColor} mb-6`}
          style={{ boxShadow: `0px 0px 10000px 0px ${product.contextColor}` }}
        />
        <h2 className='text-xl font-semibold text-left mb-2'>
          {product.subtitle}
        </h2>
        <p className='text-lg text-left text-gray-800 dark:text-gray-400 mb-4'>
          Price:{' '}
          <span className='font-bold text-green-600'>
            ${product.startingPrice} - ${product.closingPrice}
          </span>
        </p>
        <p className='text-gray-800 dark:text-gray-400 mb-4'>
          {product.description}
        </p>
      </div>

      {/* Right Side: Bid Details */}
      <div className='p-4 md:pt-12 rounded-lg grid grid-cols-1 md:grid-cols-1 gap-4'>
        <div>
          <div className='flex flex-row gap-2'>
            <h2 className='text-2xl font-semibold mb-2'>
              Bid Details{' '}
              <span className='text-sm font-light text-gray-800 dark:text-gray-400'>
                last updated 2s ago
              </span>
            </h2>
          </div>
          <div className='mb-4'>
            <Card className='shadow-none '>
              <CardHeader className='p-4'>
                <CardTitle>Line Chart - Dots</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent className='p-4'>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                      top: 12
                    }}
                  >
                    <CartesianGrid vertical={true} />
                    <XAxis
                      dataKey='hour'
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => `${value}h`}
                    />
                    <ChartTooltip
                      cursor={true}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey='amount'
                      type='natural'
                      stroke={product.contextColor}
                      strokeWidth={2}
                      dot={{
                        fill: product.contextColor
                      }}
                      activeDot={{
                        r: 6
                      }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className='overflow-x-auto mb-4'>
            <Table className='min-w-full '>
              <TableHeader>
                <TableRow>
                  <TableHead className=''>User</TableHead>
                  <TableHead className=''>Bid Amount</TableHead>
                  <TableHead className=''>Time</TableHead>
                  <TableHead className=''>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedBids.map((bid, index) => (
                  <TableRow key={index}>
                    <TableCell className=''>{bid.user}</TableCell>
                    <TableCell className=''>${bid.amount}</TableCell>
                    <TableCell className=''>{bid.time}</TableCell>
                    <TableCell className=''>{bid.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className='p-4 md:pt-12 rounded-lg grid grid-cols-1 md:grid-cols-1 gap-4'>
        {/* Your Bids Section */}
        <div className='rounded-lg'>
          <h2 className='text-2xl font-semibold mb-2'>Your Bids</h2>
          <div className='overflow-x-auto mb-4'>
            <Table className='min-w-full '>
              <TableHeader>
                <TableRow>
                  <TableHead className=''>Bid Amount</TableHead>
                  <TableHead className=''>Time</TableHead>
                  <TableHead className=''>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bids
                  .filter((bid) => bid.user === newBid.user)
                  .map((bid, index) => (
                    <TableRow key={index}>
                      <TableCell className=''>${bid.amount}</TableCell>
                      <TableCell className=''>{bid.time}</TableCell>
                      <TableCell className=''>{bid.date}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
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
              className=' mb-2 rounded'
              required
            />
            <Input
              type='number'
              name='amount'
              placeholder='Bid Amount'
              value={newBid.amount}
              onChange={handleBidChange}
              className=' mb-2 rounded'
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
    </div>
  )
}

export default ProductDetails
