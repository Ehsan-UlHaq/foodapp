import React,{useState,useEffect} from 'react'
import ItemService from '../../services/items'
import Sigleitem from './sigleitem'
import {Row,Button} from 'react-bootstrap'
export default function Allitem() {
 const [items,setitems]=useState([])
 const [isloaded,setisloaded]=useState(false)
 const getitems=()=>{
    ItemService.allitems().then((res)=>{
        console.log(typeof(res))
        setitems(res)
        console.log(items)
        setisloaded(true)
    }).catch((err)=>{
        console.log(err)
    })
 }
 useEffect(getitems,[])
  return (
    <>
    <Button onClick={()=>{
        window.location.href = "/additem";
    }}>Add item</Button>
    {isloaded ? (
          <>
          <Row className='alignres'>
              {items.map((data, index) => (
                <Sigleitem key={index} data={data} />
              ))}
          </Row>
          </>
        ) : (
          "No restaurants found"
        )}
    </>
  )
}
