
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div>
          <div className='flex gap-4 '>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </div> 
    </div>
  )
}

export default Navbar