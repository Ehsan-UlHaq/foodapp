import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import Header from './components/heaer/header';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Contactus from './pages/contactus';
import SignUp from './pages/signup';
import Notfound from './pages/notfound';
import Restaurants from './components/restaurants/restaurants';
import RestaurantsSignup from './components/restaurants/restaurants_signup';
import { CartProvider } from "react-use-cart";
// import { ToastContainer } from 'react-toastify';
import Home from './pages/home';
import Loginres from './components/restaurants/login';
import Showres from './components/restaurants/showres';
import Items from './components/items/allitem';
import Cart from './components/cart/cart';
import Order from './components/cart/order';
function App() {
  return (
    <div >
      <CartProvider>
      <Header />
     <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contact_us" element={<Contactus />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="orders" element={<Order />} />
        <Route path="cart" element={<Cart />} />
        <Route path="restaurants/:id" element={<Showres />} /> 
        <Route path="restaurants_signup" element={<RestaurantsSignup />} />
        <Route path="items" element={<Items />} /> 
        <Route path="restaurants_login" element={<Loginres />} />
        <Route  path="*" element={<Notfound />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
