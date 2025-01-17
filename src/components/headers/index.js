'use client'

import { cn } from '@/lib/utils'
import { siteRoutes } from '@/root/config/site'
import { LogoAppIcon } from '@/components/ui/icons'
import { SearchInput } from '@/components/ui/input'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import SearchIcon from '../../../public/search-icon.svg'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { CategoriesNav } from './categories'

export default function Header() {
  const segment = useSelectedLayoutSegment()

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center justify-between'>
        <div className='flex items-center'>
          <Link className='mr-6' href='/'>
            <span className='sr-only'>Home</span>
            <LogoAppIcon />
          </Link>
          <nav className='flex items-center gap-4 text-sm'>
            <CategoriesNav />
            {siteRoutes.map((route, index) => (
              <Link
                className={cn(
                  'transition-colors',
                  segment !== route.segment &&
                    'text-foreground/60 hover:text-foreground/80'
                )}
                key={index}
                href={route.path}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex items-center gap-4'>
          <SearchInput placeholder='Search Products' startIcon={SearchIcon} />
          <ModeToggle className='mr-2' />
          <Link href='/login'>
            <Button variant='secondary' size='sm'>
              <LogIn className='mr-2 h-4 w-4' />
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
