'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function Card08({ product, className = '' }) {
  const {
    name = 'Modern Design Systems',
    subtitle = 'Explore the fundamentals of contemporary UI design',
    image = 'https://via.placeholder.com/300',
    startingPrice = '10.00',
    closingPrice = '15.00',
    badge = { text: 'New', variant: 'orange' },
    href = '#',
    contextColor = 'yellow'
  } = product

  const isPriceIncreased = parseFloat(startingPrice) < parseFloat(closingPrice)
  const badgeVariant = isPriceIncreased ? 'red' : 'green'
  const arrowIcon = isPriceIncreased ? (
    <ArrowUpRight size={'15'} />
  ) : (
    <ArrowDownRight size={'15'} />
  )

  const [badgeText, setBadgeText] = React.useState(`${closingPrice}`)

  return (
    <a href={`/products/${product.id}`} className={cn('flex flex-col w-[fit] group', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          'bg-white/80 dark:bg-zinc-900/80',
          'backdrop-blur-xl',
          'border border-zinc-200/50 dark:border-zinc-800/50',
          'shadow-sm transition-all duration-300',
          'hover:-translate-y-1 hover:shadow-md',
          'hover:border-zinc-300/50 dark:hover:border-zinc-700/50',
          `shadow-${contextColor}`,
          `shadow-[0_0_20px_${contextColor}]`
        )}
      >
        {/* Image Section */}
        <div className='relative h-[280px] overflow-hidden'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-125 '
          />
        </div>

        {/* Content Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t',
            'from-black/90 via-black/40 to-transparent'
          )}
        />

        {/* Badge */}
        {badge && (
          <div className='absolute top-3 right-3 flex items-center'>
            <span
              className={cn(
                'flex flex-row px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300',
                {
                  'bg-green-500 text-white': badgeVariant === 'green',
                  'bg-red-500 text-white': badgeVariant === 'red'
                }
              )}
            >
              {badgeText}
              {arrowIcon}
            </span>
          </div>
        )}

        {/* Content Section */}
        <div className='absolute bottom-0 left-0 right-0 p-5'>
          <div className='flex items-center justify-between gap-3'>
            <div className='space-y-1.5'>
              <h3 className='text-lg font-semibold text-white leading-snug'>
                {name}
              </h3>
              {subtitle && (
                <p className='text-sm text-zinc-200 line-clamp-2'>{subtitle}</p>
              )}
            </div>
            <div
              className={cn(
                `p-2 rounded-full bg-${contextColor} backdrop-blur-md`,
                `group-hover:bg-${contextColor} transition-colors duration-300`
              )}
            >
              <ArrowUpRight className='w-4 h-4 text-white' />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
