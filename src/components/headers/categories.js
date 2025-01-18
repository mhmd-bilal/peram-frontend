'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { categories } from '@/root/config/site'

export function CategoriesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='transition-colors font-normal bg-transparent text-foreground/60 hover:text-foreground/80'>
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[800px] gap-0 p-2 grid-cols-4 md:w-[400px] md:grid-cols-3 lg:w-[900px] lg:grid-cols-4'>
              {categories.map((category) => (
                <ListItem key={category.title} title={category.title} href='#' className="hover:bg-transparent">
                  <ul className='space-y-0 pt-1'>
                    {category.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={`/category/${item.slug}`}
                          className='text-sm font-normal text-muted-foreground hover:text-foreground'
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            {children}
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
