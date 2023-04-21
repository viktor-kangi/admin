/*import React from 'react';

const ProductList = () => {
  return (
    <div>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        <li>Product 5</li>
        <li>Product 6</li>
        <li>Product 7</li>
        <li>Product 8</li>
        <li>Product 9</li>
        <li>Product 10</li>
        <li>New Product</li>
      </ul>
    </div>
  )
}

export default ProductList;*/


import React, { useEffect, useState } from 'react'
import client from '../../utils/network'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // get request for all products
    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await client.allProducts();
            setProducts(response.data)
        } catch (error) {
            setError(JSON.stringify(error.response.data))
        }
        setLoading(false)
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    
    return (
      <div>Products</div>
    )
  }
  
export default Products




