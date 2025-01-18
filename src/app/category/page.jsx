'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectGroup
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'
export default function CategoryPage() {
  const products = [
    {
      id: 1,
      image: '/image.png',
      name: 'High-Quality Gadget',
      startingPrice: '100.00',
      closingPrice: '150.00',
      contextColor: '#fcba03',
      subtitle:
        'A high-quality gadget designed for daily use. Compact and feature-packed for ease of use.'
    },
    {
      id: 2,
      image: '/image2.png',
      name: 'Versatile DIY Tool',
      startingPrice: '120.00',
      closingPrice: '110.00',
      contextColor: '#0398fc',
      subtitle:
        'A versatile tool perfect for any DIY project. Lightweight and durable, with multiple settings.'
    },
    {
      id: 3,
      image: '/image.png',
      name: 'Ergonomic Office Chair',
      startingPrice: '130.00',
      closingPrice: '125.00',
      subtitle:
        'An ergonomic chair designed for comfort during long hours of sitting. Adjustable features for perfect posture.'
    },
    {
      image: '/image.png',
      name: 'Portable Outdoor Speaker',
      startingPrice: '80.00',
      closingPrice: '90.00',
      subtitle:
        'A portable speaker with impressive sound quality. Waterproof and ready for outdoor adventures.'
    },
    {
      image: '/image.png',
      name: 'Fitness Tracker',
      startingPrice: '200.00',
      closingPrice: '250.00',
      subtitle:
        'A fitness tracker that monitors heart rate, steps, and calories burned. Sleek design and long-lasting battery.'
    },
    {
      image: '/image.png',
      name: 'Minimalist Watch',
      startingPrice: '50.00',
      closingPrice: '45.00',
      subtitle:
        'A stylish watch with a minimalist design. Perfect for both casual and formal occasions.'
    },
    {
      image: '/image.png',
      name: 'Professional Camera',
      startingPrice: '220.00',
      closingPrice: '200.00',
      subtitle:
        'A professional-grade camera with high resolution and fast autofocus. Ideal for photography enthusiasts.'
    },
    {
      image: '/image.png',
      name: 'Durable Backpack',
      startingPrice: '60.00',
      closingPrice: '55.00',
      subtitle:
        'A durable backpack with multiple compartments for organizing your gear. Great for hiking or daily commutes.'
    }
  ]

  return (
    <section className='container relative mx-auto flex max-w-[980px] grow flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
      <div className='flex flex-col justify-center items-center gap-2 mb-4 '>
        <h1 className='text-3xl font-bold '>Category Title</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Parent Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/category'>Category</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Filter and Sort Options */}
      <div className='flex justify-between mb-4 gap-2'>
        <div className='flex items-center'>
          <Select>
            <SelectTrigger>
              <SelectGroup>
                <SelectLabel>Filter by</SelectLabel>
              </SelectGroup>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='popular'>Popular</SelectItem>
              <SelectItem value='new'>New Arrivals</SelectItem>
              <SelectItem value='sale'>On Sale</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex items-center'>
          <Select>
            <SelectTrigger>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>
              </SelectGroup>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='price-asc'>Price: Low to High</SelectItem>
              <SelectItem value='price-desc'>Price: High to Low</SelectItem>
              <SelectItem value='name-asc'>Name: A to Z</SelectItem>
              <SelectItem value='name-desc'>Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:pb-10 w-full text-left'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  )
}
