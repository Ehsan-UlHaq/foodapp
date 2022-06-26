import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import userService from '../../services/userService';
export default function Order() {
    const { items,cartTotal } =useCart();
    const[orderstatus,setstatus]=useState("order recived")
  return (
    <>
    {items.length>0?<>
        {items.map((obj) => (
        <div key={obj.id}>
          <h3>{obj.name}</h3>
          <img src={obj.photo} />
        </div>
      ))}
      <h1>Total:{cartTotal}</h1>
    </>:<>
    <h1>No items are added to the cart</h1>
    </>}
    <h5>Order status</h5>
    <p>{orderstatus}</p>
    
    {userService.isAdmin()?<>
    <input type="text" value={orderstatus} onChange={(e)=>{
        setstatus(e.target.value)
    }}>
    /</input>
    </>:<></>}
    
    </>
  )
}
