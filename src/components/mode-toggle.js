'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button variant='ghost' className='h-7 w-7 px-0 hover:bg-transparent' onClick={toggleTheme}>
      <SunIcon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? 'scale-0' : 'scale-100'}`} />
      <MoonIcon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? 'scale-100' : 'scale-0'}`} />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

