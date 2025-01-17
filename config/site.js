export const siteConfig = {
  name: 'Peram: Where sale meet transparency',
  url: 'https://peram.web.app',
  ogImage: 'https://nextjs-shadcn-template.vercel.app/og.png',
  description: 'List, bid, and sell easily.',
  links: {
    twitter: 'https://twitter.com/Jozefzin',
    github: 'https://github.com/jjozef/nextjs-shadcn-template'
  }
}

export const siteRoutes = [
  {
    name: 'Product',
    path: '/product',
    segment: 'product'
  }
]

export const categories = [
  {
    title: 'Electronics',
    items: [
      { title: 'Smartphones', href: '/category/smartphones' },
      { title: 'Laptops', href: '/category/laptops' },
      { title: 'Accessories', href: '/category/accessories' }
    ]
  },
  {
    title: 'Clothing',
    items: [
      { title: "Men's Wear", href: '/category/mens-wear' },
      { title: "Women's Wear", href: '/category/womens-wear' },
      { title: 'Kids', href: '/category/kids' }
    ]
  },
  {
    title: 'Home & Living',
    items: [
      { title: 'Furniture', href: '/category/furniture' },
      { title: 'Decor', href: '/category/decor' },
      { title: 'Kitchen', href: '/category/kitchen' }
    ]
  }
]
