import React from 'react'
import {Card,Button,Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Singleres({data}) {
  let navigate = useNavigate();
  return (
   <>
   <Col sm={4} xs={12}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         {data.email}
        </Card.Text>
        <Button variant="primary"
        onClick={()=>{
          window.location.href = `restaurants/${data._id}`;
        }}
        >more info</Button>
      </Card.Body>
    </Card>
    </Col>
   </>
  )
}
