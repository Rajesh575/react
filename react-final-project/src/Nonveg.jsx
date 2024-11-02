import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Store'

function Nonveg() {
  const nonvegProducts=useSelector(state =>state.products.nonveg)
  const dispatch=useDispatch()
  const items=nonvegProducts.map((product,index)=>
    <li key={index}>
      {product.name} -${product.price.toFixed(2)}
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </li>
  )
  return (
    <>
    <h1>Non-veg page</h1>
    <ul>{items}</ul>
    </>
  )
}

export default Nonveg