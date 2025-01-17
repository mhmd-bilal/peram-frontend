'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Card08({ product, className = '' }) {
  const {
    name = 'Modern Design Systems',
    subtitle = 'Explore the fundamentals of contemporary UI design',
    image = 'https://via.placeholder.com/300',
    badge = { text: 'New', variant: 'orange' },
    href = '#'
  } = product

  return (
    <a
      href={href}
      className={cn('flex flex-col w-[fit] group', className)}
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          'bg-white/80 dark:bg-zinc-900/80',
          'backdrop-blur-xl',
          'border border-zinc-200/50 dark:border-zinc-800/50',
          'shadow-sm transition-all duration-300',
          'hover:-translate-y-1 hover:shadow-md',
          'hover:border-zinc-300/50 dark:hover:border-zinc-700/50'
        )}
      >
        {/* Image Section */}
        <div className='relative h-[280px] overflow-hidden'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
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
          <div className='absolute top-3 right-3'>
            <span
              className={cn('px-2.5 py-1 rounded-full text-xs font-medium', {
                'bg-pink-500 text-white': badge.variant === 'pink',
                'bg-indigo-500 text-white': badge.variant === 'indigo',
                'bg-orange-500 text-white': badge.variant === 'orange'
              })}
            >
              {badge.text}
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
                'p-2 rounded-full bg-white/10 backdrop-blur-md',
                'group-hover:bg-white/20 transition-colors duration-300'
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
