import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
// import { toast } from 'react-toastify';
import "./loginstyle.css"
import userService from '../services/userService'
export default function Login() {

  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [err,seterr]=useState(false)
  const handlelogin=()=>{
    userService.login(username, password)
    .then((data) => {
      // console.log(data);
       window.location.href = "/";
    })
    .catch((err) => {
      // console.log(err.response.data);
      // seterr(true)
      alert("password or username is incorrect")
    });
  }
  return (
    <Form className='loginform' onSubmit={handlelogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" required onChange={(e)=>{
          setusername(e.target.value)
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required onChange={(e)=>{
          setpassword(e.target.value)
        }} />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      {/* {err?<>
        <Form.Group>
      <Form.Text className="text-muted " style={{color:"red"}}>
         password or username is incorrect
        </Form.Text>
      </Form.Group>
      </>:<></>} */}
      
    </Form>
  )
}