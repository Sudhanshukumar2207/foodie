"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

export default function Header() {
  const {user,isSignedIn}=useUser()
  return (
    <div className='bg-blue-950 flex gap-3 justify-between items-center pr-3 md:px-10 shadow-md'>
      <img className='h-20' src="/FOODIE.png" alt="logo" />
      <div className='flex border p-2 rounded-lg bg-gray-200 w-96'>
        <input type="text" className='bg-transparent outline-none w-full'/>
        <Search/>
      </div>{
        isSignedIn?<UserButton/>:
      <div className='flex gap-5'>
        <SignInButton mode='modal'><Button variant="outline" className="border-2 border-red-500 text-red-500">Login</Button></SignInButton>
        {/* <SignUpButton><Button className='bg-red-400'>Sign Up</Button></SignUpButton> */}
      </div>}
    </div>
  )
}
