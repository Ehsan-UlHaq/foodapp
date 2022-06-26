import React,{useState} from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import './restaurant.css'
import userService from '../../services/userService'
import restaurantService from '../../services/registerrestaurant'
export default function RestaurantsSignup() {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[address,setaddress]=useState("")
  const[phone,setphone]=useState("")
  const[cuisine,setcuisine]=useState("")
  const[services,setservices]=useState("")
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  //for image upload
  const[photo,setUrl]=useState("")
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const [imege, setImege] = useState("");
  const handleImg = (e) => {
    setImege(e.target.files[0]);
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };
  const postdetials = () => {
    const data = new FormData();
    data.append("file", imege);
    data.append("upload_preset", "testapp");
    data.append("cloud_name", "van12");
    fetch("https://api.cloudinary.com/v1_1/van12/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
        // console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///yahan tak image input
  const handleregister=()=>{
    restaurantService.register(name,phone,address,cuisine,services,photo,email,username,password).then((res)=>{
      console.log(photo)
      window.location.href = "/";
    }).catch((err)=>{
      console.log(err)
    })
  }
  // if (e.target.files[0]) {
  //   setImg({
  //     src: URL.createObjectURL(e.target.files[0]),
  //     alt: e.target.files[0].name,
  //   });
// const handleImg=(e)=>{


  return (
    <Form className='registerform'>
      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridPassword">

      <Form.Label>Photo</Form.Label>
        <Form.Control type="file" accept='.png, .jpg, .jpeg ' onChange={handleImg} placeholder="email" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
      <Button variant="primary" onClick={postdetials}>
     Upload
    </Button>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Enter name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="email" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setaddress(e.target.value)}} placeholder="Enter address" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number  " onChange={(e)=>{setphone(e.target.value)}} placeholder="Phone" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>cuisine</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setcuisine(e.target.value)}} placeholder="Enter cuisine" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>services</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setservices(e.target.value)}} placeholder="Services" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setusername(e.target.value)}} placeholder="enter username" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Passwor</Form.Label>
        <Form.Control type="password " onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
    </Row>
    <Button variant="primary" onClick={handleregister}>
      Register
    </Button>
  </Form>
  )
}
