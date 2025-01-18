import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarterAccordion } from '@/components/starter-accordion'
import { GitHubIcon, TwitterIcon } from '@/components/ui/icons'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChartBarStacked, Pickaxe } from 'lucide-react'

// New ProductCard component
// function ProductCard({ image, name, startingPrice, closingPrice }) {
//   return (
//     <div className='border rounded-sm p-4'>
//       <img src={image} alt={name} className='w-full h-48 object-cover' />
//       <h2 className='text-lg font-bold'>{name}</h2>
//       <p>Starting Price: {startingPrice}</p>
//       <p>Closing Price: {closingPrice}</p>
//     </div>
//   )
// }

export default function Home() {
  const products = [
    {
      image: '/image.png',
      name: 'High-Quality Gadget',
      startingPrice: '100.00',
      closingPrice: '150.00',
      contextColor:"#fcba03",
      subtitle:
        'A high-quality gadget designed for daily use. Compact and feature-packed for ease of use.'
    },
    {
      image: '/image.png',
      name: 'Versatile DIY Tool',
      startingPrice: '120.00',
      closingPrice: '110.00',
      contextColor:"#0398fc",
      subtitle:
        'A versatile tool perfect for any DIY project. Lightweight and durable, with multiple settings.'
    },
    {
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
      <div className='absolute bottom-0 left-0 right-0 top-0 -z-[1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_45%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

      <Badge
        className='select-none text-sm transition-all duration-300 hover:scale-105'
        variant='secondary'
      >
        List, bid, and sell easily 🎉
      </Badge>
      <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
        Peram: Where sale meet transparency
      </h1>
      <p className='mx-auto max-w-[750px] text-pretty text-center text-lg text-muted-foreground sm:text-xl'>
        Bid, win, and save—explore a wide range of products at unbeatable prices
        while enjoying a transparent auction experience.{' '}
      </p>
      <div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
        <Button className='gap-2' asChild>
          <Link
            href='/categories'
            rel='noopener noreferrer'
          >
            <ChartBarStacked className='h-5 w-5 min-w-5' />
            Explore categories
          </Link>
        </Button>
        <Button className='gap-2' variant='outline' asChild>
          <Link
            href='https://x.com/jozefzin'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Pickaxe className='h-5 w-5 min-w-5' />
            Host your auction
          </Link>
        </Button>
      </div>
      <div className='text-left'>
        <Dialog>
          <h1 className='text-left text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
            Recent products in{' '}
            <DialogTrigger>
              <u className='cursor-pointer'>Coimbatore, India</u>
            </DialogTrigger>
          </h1>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select location</DialogTitle>
              <DialogDescription>
                From the dropdown, please select the state.
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coimbatore">Coimbatore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:pb-10 w-full text-left'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  )
}
