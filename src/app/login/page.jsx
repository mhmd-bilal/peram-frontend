'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { login } from '@/utils/api'
import { supabase } from '@/utils/supabaseClient'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await login(email, password)

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        toast.success('Login successful')
      } else {
        const data = await response.json()
        toast.error(data.message || 'Invalid credentials')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred. Please try again.')
    }
  }

  const handleGoogleSignIn = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })

    if (error) {
      toast.error('Error signing in with Google: ' + error.message)
    } else {
      localStorage.setItem('token', session.access_token)
      toast.success('Google login successful')
    }
  }

  return (
    <div className='flex items-center justify-center bg-background py-24'>
      <Card className='w-[400px] pb-6'>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit' className='w-full'>
              Sign in
            </Button>
          </CardFooter>
        </form>
        <div className='px-6'>
          <Button onClick={handleGoogleSignIn} className='w-full'>
            Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  )
}
