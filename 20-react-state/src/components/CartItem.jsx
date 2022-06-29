import React from 'react'
import Counter from './Counter'

const CartItem = ({product}) => {

  return (
    <div style={{display: "flex"}}>
      <span>{product}</span>
      <Counter />
    </div>
  )
}

export default CartItem