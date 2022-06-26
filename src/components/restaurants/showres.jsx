import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import restaurantService from '../../services/registerrestaurant'
export default function Showres() {
    let param=useParams()
    let id=param.id
    console.log(id)
    const [data,setdata]=useState()
    const [isloaded,setisloaded]=useState(false)
    const getdata=()=>{
         restaurantService.getsingleres(id).then((res)=>{
             setdata(res)
             setisloaded(true)
             console.log(res)
         })
         .catch((err)=>{
            console.log(err)
         })
    }
    useEffect(getdata,[])
  return (
    <>
      {isloaded?<>
      
      <h1>{data.name}</h1>
      <h2>{data.phone}</h2>
      <h3>{data.address}</h3>
      <h4>{data.email}</h4>
      <p>{data.services}</p>
      </>:<></>}
    </>
  )
}
