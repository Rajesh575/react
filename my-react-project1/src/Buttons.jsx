import { useState } from "react"

function Button(){
    const [count,setCount]=useState(0)
    const increment=()=>{
    setCount(count+1)
    }
    const decrement=()=>{
      setCount(count-1)
    }
    return(
      <>
      <h1 style={{color:count<0?"red":"green",textAlign:"right"}}>This is counter value:{count}</h1>
      <button style={{color:"green", backgroundColor:"lightblue"}} onClick={increment}>Increment</button>
      <button style={{color:"red", backgroundColor:"lightblue"}} onClick={decrement}>Decrement</button>
      <button style={{color:"black",backgroundColor:"lightblue"}} onClick={()=>{setCount(0)}}>Reset</button>
      </>
    )
  }
  export default Button;