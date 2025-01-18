export const siteConfig = {
  name: 'Peram: Where sale meet transparency',
  url: 'https://peram.web.app',
  ogImage: 'https://i.ibb.co/qpk3xjv/image.png',
  description: 'List, bid, and sell easily.',
  links: {
    twitter: 'https://twitter.com/Jozefzin',
    github: 'https://github.com/jjozef/nextjs-shadcn-template'
  }
}

export const siteRoutes = [
  {
    name: 'Products',
    path: '/products',
    segment: 'products'
  }
]

export const categories = [
  {
    title: 'Electronics',
    items: [
      { title: 'Smartphones', slug: 'smartphones' },
      { title: 'Laptops', slug: 'laptops' },
      { title: 'Accessories', slug: 'accessories' },
      { title: 'Cameras', slug: 'cameras' },
      { title: 'Gaming Consoles', slug: 'gaming-consoles' },
      { title: 'Wearable Devices', slug: 'wearable-devices' },
      { title: 'Home Appliances', slug: 'home-appliances' }
    ]
  },
  {
    title: 'Clothing',
    items: [
      { title: "Men's Wear", slug: 'mens-wear' },
      { title: "Women's Wear", slug: 'womens-wear' },
      { title: 'Kids', slug: 'kids' },
      { title: 'Shoes', slug: 'shoes' },
      { title: 'Bags', slug: 'bags' },
      { title: 'Accessories', slug: 'clothing-accessories' }
    ]
  },
  {
    title: 'Home & Living',
    items: [
      { title: 'Furniture', slug: 'furniture' },
      { title: 'Decor', slug: 'decor' },
      { title: 'Kitchen', slug: 'kitchen' },
      { title: 'Storage', slug: 'storage' },
      { title: 'Bedding', slug: 'bedding' },
      { title: 'Lighting', slug: 'lighting' },
      { title: 'Tools', slug: 'tools' }
    ]
  },
  {
    title: 'Books & Media',
    items: [
      { title: 'Books', slug: 'books' },
      { title: 'Magazines', slug: 'magazines' },
      { title: 'Music', slug: 'music' },
      { title: 'Movies', slug: 'movies' },
      { title: 'Video Games', slug: 'video-games' }
    ]
  },
  {
    title: 'Sports & Outdoors',
    items: [
      { title: 'Fitness Equipment', slug: 'fitness-equipment' },
      { title: 'Camping Gear', slug: 'camping-gear' },
      { title: 'Cycling', slug: 'cycling' },
      { title: 'Sportswear', slug: 'sportswear' },
      { title: 'Accessories', slug: 'sports-accessories' }
    ]
  },
  {
    title: 'Vehicles',
    items: [
      { title: 'Cars', slug: 'cars' },
      { title: 'Motorcycles', slug: 'motorcycles' },
      { title: 'Bicycles', slug: 'bicycles' },
      { title: 'Parts & Accessories', slug: 'vehicle-parts-accessories' }
    ]
  },
  {
    title: 'Health & Beauty',
    items: [
      { title: 'Skincare', slug: 'skincare' },
      { title: 'Makeup', slug: 'makeup' },
      { title: 'Hair Care', slug: 'hair-care' },
      { title: 'Wellness', slug: 'wellness' },
      { title: 'Fitness', slug: 'fitness' }
    ]
  },
  {
    title: 'Toys & Hobbies',
    items: [
      { title: 'Toys', slug: 'toys' },
      { title: 'Board Games', slug: 'board-games' },
      { title: 'Collectibles', slug: 'collectibles' },
      { title: 'DIY Crafts', slug: 'diy-crafts' },
      { title: 'Model Building', slug: 'model-building' }
    ]
  },
  {
    title: 'Pet Supplies',
    items: [
      { title: 'Pet Food', slug: 'pet-food' },
      { title: 'Pet Toys', slug: 'pet-toys' },
      { title: 'Pet Accessories', slug: 'pet-accessories' },
      { title: 'Aquariums', slug: 'aquariums' },
      { title: 'Grooming Supplies', slug: 'grooming-supplies' }
    ]
  },
  {
    title: 'Others',
    items: [
      { title: 'Antiques', slug: 'antiques' },
      { title: 'Art', slug: 'art' },
      { title: 'Musical Instruments', slug: 'musical-instruments' },
      { title: 'Office Supplies', slug: 'office-supplies' },
      { title: 'Miscellaneous', slug: 'miscellaneous' }
    ]
  }
]
