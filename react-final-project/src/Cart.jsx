import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./Store";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // Get cart items from Redux store
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0); // Store discount percentage
  const [couponCode,setCouponCode] = useState('')
  const [couponDisc,setCouponDisc] = useState(0)

  const handleCoupon =()=>{
      switch(couponCode){
        case 'MAHESH10':
          setCouponDisc(10);
          break;
          case 'RAVI20':
          setCouponDisc(20);
          break;
          case 'RAJESH30':
          setCouponDisc(30);
          break;
          default:
            alert("invalid coupon code");
            setCouponDisc(0);
      }
  }
  // Calculate total, discount, and net amount
  const calculateTotals = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity,0);
    const discountAmount = (total * discount) / 100;
    const netAmount = total - discountAmount;
    const coupondiscountprice = (netAmount*couponDisc)/100;
   const finalnetAmount = total - discountAmount-coupondiscountprice;
    return { total, discountAmount, finalnetAmount ,coupondiscountprice};
  };
 const { total, discountAmount, finalnetAmount ,coupondiscountprice} = calculateTotals();
 return (
    <>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.name}>
              {item.name} - Price: ${item.price}
                <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                 Quantity: {item.quantity}
                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            
            </li>
          ))}
        </ul>
      )}

      <h3>Total before discounts: ${total.toFixed(2)}</h3>
      <button onClick={() => setDiscount(10)}>Apply 10% Discount</button>
        <button onClick={() => setDiscount(20)}>Apply 20% Discount</button>
        <button onClick={() => setDiscount(30)}>Apply 30% Discount</button>
        <p>Apply coupon code</p>
        <input type='text' value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>
        <button onClick={()=>handleCoupon()}>Apply Coupon</button>
       <p>Discount Percentage Applied: {discount}</p>
       <p>Coupon code apply:{couponDisc}</p>
      <p>Discount Amount: ${discountAmount.toFixed(2)}%</p>
      <p>Final Amount after Discount: ${finalnetAmount}</p>
    </>
  );
};
export default Cart;