import React, { useState } from 'react'
import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter()
  const { id } = router.query

  // Placeholder product details
  const product = {
    name: 'Modern Design Systems',
    subtitle: 'Explore the fundamentals of contemporary UI design',
    image: 'https://via.placeholder.com/600',
    startingPrice: '10.00',
    closingPrice: '15.00',
    description: 'Detailed description of the product goes here. This product is designed to help you understand the principles of modern design systems and how to implement them effectively in your projects.',
  }

  // Placeholder bid data
  const [bids, setBids] = useState([
    { user: 'Alice', amount: '12.00', date: '2023-10-01', time: '14:30' },
    { user: 'Bob', amount: '13.00', date: '2023-10-02', time: '15:00' },
  ])

  const [newBid, setNewBid] = useState({ user: '', amount: '' })

  const handleBidChange = (e) => {
    const { name, value } = e.target
    setNewBid({ ...newBid, [name]: value })
  }

  const handleBidSubmit = (e) => {
    e.preventDefault()
    const date = new Date().toISOString().split('T')[0]
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setBids([...bids, { ...newBid, date, time }])
    setNewBid({ user: '', amount: '' }) // Reset form
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Side: Product Details */}
      <div>
        <h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg mb-6" />
        <h2 className="text-xl font-semibold text-center mb-2">{product.subtitle}</h2>
        <p className="text-lg text-center text-gray-700 mb-4">
          Price: <span className="font-bold text-green-600">${product.startingPrice} - ${product.closingPrice}</span>
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Side: Bid Details */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Bid Details</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">User</th>
                <th className="border border-gray-300 p-2">Bid Amount</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{bid.user}</td>
                  <td className="border border-gray-300 p-2">${bid.amount}</td>
                  <td className="border border-gray-300 p-2">{bid.date}</td>
                  <td className="border border-gray-300 p-2">{bid.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bid Placing Form */}
        <h3 className="text-lg font-semibold mb-2">Place a Bid</h3>
        <form onSubmit={handleBidSubmit} className="flex flex-col">
          <input
            type="text"
            name="user"
            placeholder="Your Name"
            value={newBid.user}
            onChange={handleBidChange}
            className="border border-gray-300 p-2 mb-2 rounded"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Bid Amount"
            value={newBid.amount}
            onChange={handleBidChange}
            className="border border-gray-300 p-2 mb-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Submit Bid
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductDetails
