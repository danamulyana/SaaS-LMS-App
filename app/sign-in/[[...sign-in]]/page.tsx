import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <main className='flex items-center justify-center'>
      <SignIn />
    </main>
  )
}
