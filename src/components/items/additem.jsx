import React,{useState} from 'react'
import {Row,Col ,Form,Button} from 'react-bootstrap'
import ItemService from '../../services/items'
import userService from '../../services/userService'
export default function Additem() {
  const[name,setname]=useState("")
  const[price,setprice]=useState()
  const[restaurantid,setrestaurantid]=useState(userService.getLoggedInUser()._id)
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
        console.log(photo)
        // console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///yahan tak image input
  const handleregister=()=>{
   ItemService.additem(name,photo,price,restaurantid).then((res)=>{
      console.log(photo)
      window.location.href = "/items";
    }).catch((err)=>{
      console.log(err)
    })
  }
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
        <Form.Label>price</Form.Label>
        <Form.Control type="number" onChange={(e)=>{setprice(e.target.value)}} placeholder="set price" />
      </Form.Group>
    </Row>
    
    <Button variant="primary" onClick={handleregister}>
      Add item
    </Button>
  </Form>
  )
}
