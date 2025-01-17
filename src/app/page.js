import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarterAccordion } from '@/components/starter-accordion'
import { GitHubIcon, TwitterIcon } from '@/components/ui/icons'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
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
      name: 'Product 1',
      startingPrice: '10.00',
      closingPrice: '15.00',
      subtitle:
        'hwl le asfo no pasn fas nf il asnf asionfoiasn foiansiuf naso nfsafnpnsafsaf afasbjif la'
    },
    {
      image: '/image.png',
      name: 'Product 1',
      startingPrice: '10.00',
      closingPrice: '15.00',
      subtitle:
        'hwl le asfo no pasn fas nf il asnf asionfoiasn foiansiuf naso nfsafnpnsafsaf afasbjif la'
    },    {
      image: '/image.png',
      name: 'Product 1',
      startingPrice: '10.00',
      closingPrice: '15.00',
      subtitle:
        'hwl le asfo no pasn fas nf il asnf asionfoiasn foiansiuf naso nfsafnpnsafsaf afasbjif la'
    },    {
      image: '/image.png',
      name: 'Product 1',
      startingPrice: '10.00',
      closingPrice: '15.00',
      subtitle:
        'hwl le asfo no pasn fas nf il asnf asionfoiasn foiansiuf naso nfsafnpnsafsaf afasbjif la'
    },    // Add more products as needed
  ]

  return (
    <section className='container relative mx-auto flex max-w-[980px] grow flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
      <div className='absolute bottom-0 left-0 right-0 top-0 -z-[1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_45%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

      <Badge
        className='select-none text-sm transition hover:scale-105'
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
            href='https://github.com/JJozef/nextjs-shadcn-template'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHubIcon className='h-5 w-5 min-w-5' />
            GitHub
          </Link>
        </Button>
        <Button className='gap-2' variant='outline' asChild>
          <Link
            href='https://x.com/jozefzin'
            rel='noopener noreferrer'
            target='_blank'
          >
            <TwitterIcon className='h-5 w-5 min-w-5' />
            Twitter
          </Link>
        </Button>
      </div>
      <div className='text-left'>
        <h1 className='text-left text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
          Recent products in <u className='cursor-pointer'>Coimbatore, India</u>
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:pb-10 w-full text-left'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  )
}
