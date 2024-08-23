import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
function Product() {
    let [products,setProducts] = useState({});
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((products)=>{
            setProducts(products.data);
            console.log(products)
       })
    }, [])
  return (
<>
<Card/>
<div className="flex gap-3 mt-16 justify-center flex-wrap">
    {
    products.length > 0 ? products.map(product=> <Card id={product.id }  key={product.id} title={product.title}  image={product.image} price={product.price}/>) : <h1>No Prducts</h1>
    }

</div>
</>
  )
}

export default Product
