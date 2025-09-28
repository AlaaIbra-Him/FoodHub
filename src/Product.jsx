import React from 'react'
import Products from './Products'


function Product() {
    return (
        <>
            <h1 className='text-gray-100 text-4xl my-5 justify-center font-bold mt-[8rem] flex'>Our Menu</h1>
            <div className='flex  justify-center'>
                <Products />
                
            </div></>

    )
}

export default Product