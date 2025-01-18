import React from 'react'
import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter()
  const { id } = router.query

  // Fetch product details using the id (this is just a placeholder)
  const product = {
    name: 'Modern Design Systems',
    subtitle: 'Explore the fundamentals of contemporary UI design',
    image: 'https://via.placeholder.com/300',
    startingPrice: '10.00',
    closingPrice: '15.00',
    description: 'Detailed description of the product goes here.',
    // Add more product details as needed
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.subtitle}</p>
      <p>Price: ${product.startingPrice} - ${product.closingPrice}</p>
      <p>{product.description}</p>
      {/* Add more details as needed */}
    </div>
  )
}

export default ProductDetails 