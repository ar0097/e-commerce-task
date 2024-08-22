import React from 'react'
import Products from './ProductsCard/Products';
import Product from './ProductCarousel/Product';
import Category from './Category/Category';
import { electronicsData, toysData } from '../data/Data';

function Homepage() {
  return (
    <div className='h-full'>
      <Products />
      <Product />
      <Category data={electronicsData}/>
      <Category data={toysData} />
    </div>
  )
}

export default Homepage;