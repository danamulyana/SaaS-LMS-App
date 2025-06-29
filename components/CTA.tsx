import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
        <div className='cta-badge'>Start learning your way.</div>
        <h2 className='text-3xl font-bold'>Unlock your potential with personalized learning.</h2>
        <p className='text-lg'>Join our community of learners and take the first step towards achieving your goals.</p>
        <Image src='images/cta.svg' alt='CTA Image' width={362} height={232} />
        <Button className='btn-primary'>
            <Image src='/icons/plus.svg' alt='Plus Icon' width={12} height={12} />
            <Link href='/companions/new'>
                <p>Create a new companion</p>
            </Link>
        </Button>
    </section>
  )
}

export default CTA