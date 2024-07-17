import Image from 'next/image'
import React from 'react'

const products = [
    {
        img: '/grocery.webp',
        title: 'Grocery'
    },
    {
        img: '/mobiles.webp',
        title: 'Mobiles'
    },
    {
        img: '/fashion.webp',
        title: 'Fashion',
    },
    {
        img: '/electronics.webp',
        title: 'Electronics',
    },
    {
        img: '/homefurniture.webp',
        title: 'Home and Furniture',
    },
    {
        img: '/appliances.webp',
        title: 'Appliances',
    },
    {
        img: '/travel.webp',
        title: 'Travel',
    },
    {
        img: '/beautytoys.webp',
        title: 'Beauty, Toys and More',
    },
    {
        img: '/twowheelers.webp',
        title: 'Two Wheelers',
    }
]

function Products() {
  return (
    <div className='flex justify-evenly items-center bg-white mt-2 mx-4 p-5'>
        {products.map((product, index)=> {
            return (
                <div key={index} className='flex justify-center items-center flex-col'>
                    <Image src={product.img} alt='' width={64} height={64} />
                    <p className='font-medium mt-1'>{product.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Products