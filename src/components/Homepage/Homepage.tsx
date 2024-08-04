import React from 'react'
import Products from './ProductsCard/Products';
import Product from './ProductCarousel/Product';
import Category from './Category/Category';

function Homepage() {
  return (
    <div className='h-full'>
      <Products />
      <Product />
      <Category />
    </div>
  )
}

export default Homepage;