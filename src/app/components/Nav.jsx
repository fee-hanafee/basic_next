import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='grid grid-cols-12 px-4   h-[3.5rem] items-center'>
    <div className='col-span-2'>Logo</div>
    <div className='col-span-8'>Menu</div>
    <div className='col-span-2'>
      <Link href={'/login'}>Login</Link>
    </div>
    </nav>
  )
}
