'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function LocationDialog() {
  const [location, setLocation] = useState('') // State to hold the selected location
  const [userLocation, setUserLocation] = useState(null) // State to hold user location

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
          getStateName(latitude, longitude) // Get state name
        },
        (error) => {
          console.error('Error getting user location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  const getStateName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      )
      const data = await response.json()
      console.log(data.address)
      if (data && data.address && data.address.state) {
        setLocation(data.address.city ? data.address.city+", "+data.address.state : data.address.state_district+", "+data.address.state) // Set the state name
      } else {
        setLocation('Location unavailable')
      }
    } catch (error) {
      console.error('Error fetching state name:', error)
    }
  }
  useEffect(() => {
    getUserLocation() // Call the function when the component mounts
  }, [])

  return (
    <Dialog>
      <h1 className='text-left text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
        Recent products in{' '}
        <DialogTrigger>
          <u className='cursor-pointer'>{location || 'Select your location'}</u>
        </DialogTrigger>
      </h1>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select location</DialogTitle>
          <DialogDescription>
            From the dropdown, please select the state.
            <Select onValueChange={setLocation}>
              {' '}
              {/* Update state on selection */}
              <SelectTrigger className='mt-2'>
                <SelectValue placeholder='Select a location' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='coimbatore'>Coimbatore</SelectItem>
                <SelectItem value='chennai'>Chennai</SelectItem>
                <SelectItem value='bangalore'>Bangalore</SelectItem>
                <SelectItem value='mumbai'>Mumbai</SelectItem>
              </SelectContent>
            </Select>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
