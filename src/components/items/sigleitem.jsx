import React from 'react'
import {Col,Card,Button} from 'react-bootstrap'
import {useCart } from "react-use-cart";
import userService from '../../services/userService';
export default function Sigleitem({data}) {
    let userid=userService.getLoggedInUser()._id
    const { addItem } = useCart();
    let item={
        id:data._id,
        name:data.name,
        photo:data.photo,
        price:data.price,
        restaurantid:data.restaurantid,
        customerid:userid
    }
  return (
    <>
    <Col sm={4} xs={12}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         {data.price}
        </Card.Text>
        <Button variant="primary"
        onClick={()=>{
         addItem(item)
        }}
        >Add to cart</Button>
      </Card.Body>
    </Card>
    </Col>
    </>
  )
}
