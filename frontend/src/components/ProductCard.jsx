import React from 'react'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { ShoppingCart } from 'lucide-react'

const ProductCard = ({ product, loading }) => {

    const { productImg, productPrice, productName } = product;

    return (
        <div className='shadow-lg rounded-lg overflow-hidden h-max'>
            <div className="w-full h-full aspect-square overflow-hidden">
                {
                    loading ? <Skeleton className='rounded-lg w-full h-full' /> : <img
                        src={productImg[0]?.url}
                        alt=""
                        className="w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                }

            </div>
            {
                loading ? <div className='px-2 space-y-2 my-2'>
                    <Skeleton className='w-50 h-4' />
                    <Skeleton className='w-25 h-4' />
                    <Skeleton className='w-37.5 h-8' />
                </div> :
                    <div className='px-2 space-y-1'>
                        <h1 className='font-semibold line-clamp-2 h-12'>{productName}</h1>
                        <h2 className='font-bold'>₹{productPrice}</h2>
                        <Button className='bg-pink-600 mb-3 w-full'><ShoppingCart/>Add to Cart</Button>
                    </div>
            }

        </div>
    )
}

export default ProductCard
