import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductCards() {
    return (
        <div className="container grid grid-cols-1 gap-6 sm:text-center md:grid-cols-2 md:text-left">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductCards
