import React from 'react'

const ProductPage = async () => {
    const res = await fetch('http://localhost:8000/products', { cache: 'no-store' })
    const products = await res.json()
    console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div className='grid grid-cols-3 gap-5'>
        {products.map((product) => (
            <div key={product.id} className='border p-5 p-3 rounded-lg'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage