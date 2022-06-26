import React from 'react'
import {Card,Button,Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Singleres({data}) {
  let navigate = useNavigate();
  return (
   <>
   <Col sm={4} xs={12}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.photo} />
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
