import { useState } from "react";

function Apple(){
    const [apple,setApple]=useState(0)
    return(
      <>
      <h1 style={{color:"red"}}>Number of apples:{apple}</h1>
      {apple>0?
      (<p>Apples are present</p>):(<p>Apples are not present</p>)
      }
      <button onClick={()=>setApple(apple+1)}>Apples+1</button>
      <button onClick={()=>apple>0 && setApple(apple-1)}>Apples-1</button>
      <button onClick={()=>setApple(0)}>Reset</button>
      </>
    )
  }
  export default Apple;