import { useState } from "react";

function Increment(){
    const [count,setCount]=useState(0) 
         const  update=()=>{
          setCount(count+1)
         }
         return(
          <>
          <h1>This is counter value:{count}</h1>
          <button style={{color:"green", backgroundColor:"lightblue"}} onClick={update}>Increment</button>
          </>
         )
  }
  export default Increment;
