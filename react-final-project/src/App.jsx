import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Home from "./Home";
import Nonveg from "./Nonveg";
import Veg from "./Veg";
import './App.css'
import PurchaseHistory from "./PurchaseHistory";
import { useSelector } from "react-redux";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App()
{
  const cart=useSelector((state)=>state.cart)
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0)

  return(
    <>
     
     <GoogleOAuthProvider clientId="864597621544-4154chejq9b4b18p5fa08galfnjl6o7m.apps.googleusercontent.com">

    <Router>
      <nav>
      <Link to="/home" class="nav-link">Home</Link>
      <Link to="/veg" class="nav-link">Veg</Link>
      <Link to="/nonveg" class="nav-link">Non-veg</Link>
      <Link to="/cart" class="nav-link">Cart{totalItems}</Link>
      <Link to="/history" class="nav-link">Purchase History</Link>
      <Link to="/about" class="nav-link">AboutUs</Link>
      <Link to="/contact" class="nav-link">ContactUs</Link>
      </nav>
      
      
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/veg" element={<Veg/>}/>
        <Route path="/nonveg" element={<Nonveg/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/history" element={<PurchaseHistory/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    <GoogleLogin/>

    </GoogleOAuthProvider>

    </>
  )
}
export default App;