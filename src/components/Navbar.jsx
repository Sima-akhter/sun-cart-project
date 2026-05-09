
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div className='border p-5 bg-zinc-700 '>
          <div className='flex gap-5 justify-center text-white'>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </div> 
    </div>
  )
}

export default Navbar