import React from 'react'
import { useCart } from "react-use-cart";
export default function Cart() {
    const { items, updateItemQuantity, removeItem,cartTotal } =useCart();
   
  return (
    <>
    {items.length>0?<>
        {items.map((obj) => (
        <div key={obj.id}>
          <img src={obj.photo} />
          <h3>{obj.name}</h3>
          <h6>{obj.price}</h6>
          <p>Quanitiy :{obj.quantity}</p>
          <p>Item total: {obj.quantity*obj.price}</p>
          <button onClick={()=>{
            updateItemQuantity(obj.id,obj.quantity + 1)
          }}>+</button>
          <button onClick={()=>{
            updateItemQuantity(obj.id,obj.quantity - 1)
          }}>-</button>
          
        </div>
      ))}
      <h1>Total:{cartTotal}</h1>
      <button
      onClick={()=>{
        window.location.href = "/orders";
      }}
      >Checkout</button>
    </>:<>
    <h1>No items are added to the cart</h1>
    </>}
    
    </>
  )
}
