import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Row} from 'react-bootstrap'
import Singleres from './singleres';
import './restaurant.css'
export default function Restaurants() {
    const [list,setlist]=useState([]);
    const getdata=()=>{
        axios.get("http://localhost:3000/resturnants").then((res)=>{
            setlist(res.data)
            console.log(list)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(getdata,[])
  return (
    <>
     {list.length > 0 ? (
          <>
          <Row className='alignres'>
              {list.map((data, index) => (
                <Singleres key={index} data={data} />
              ))}
          </Row>
          </>
        ) : (
          "No restaurants found"
        )}
   
    </>
  )
}
