import { useState } from "react"

function Discount(){
    const originalprice=10000
      const [discountedprice,setDiscountedprice] =useState(0)
      const [discount,setDiscount]=useState(0)
      const [dpercent,setDpercent]=useState(0)
  
      const applydiscount=(price)=>{
      if(price===10){
        setDiscountedprice(originalprice*0.9)
         setDiscount(originalprice*0.1)
         setDpercent(price)
      }
      else if(price===20){
        setDiscountedprice(originalprice*0.8)
         setDiscount(originalprice*0.2)
         setDpercent(price)
      }
      else if(price===30){
        setDiscountedprice(originalprice*0.7)
        
         setDiscount(originalprice*0.3)
         setDpercent(price)
      }
      else{
        setDiscountedprice(0)
         setDiscount(0)
         setDpercent(price)
      }
    }
    return(
      <>
      <h1>Original Price:{originalprice}</h1>
      <h2>Discounted Price:{discountedprice}</h2>
      <h2>Discount Amount:{discount}</h2>
      <h2>Discount Applied:{dpercent}%</h2>
      <h2>Click a button to apply the discount</h2>
      <button onClick={()=>applydiscount(10)}>Apply 10% Discount</button>
      <button onClick={()=>applydiscount(20)}>Apply 20% Discount</button>
      <button onClick={()=>applydiscount(30)}>Apply 30% Discount</button>
      <button onClick={()=>applydiscount(0)}>Reset</button>
      </>
    )
  }
  export default Discount;