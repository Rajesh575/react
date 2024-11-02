/*import React from "react";
import { Fragment } from "react";

function App(){
  return(
    <React:Fragment>
    <h1>This is first program</h1>
    <h1>This is first program</h1>
    </React:Fragment>
  )
}
export default App;*/
/*function Web()
{
    const username="Mahesh";
    const password="mahi@123";
    return (
        <>
        <h1>Login Page</h1>
        <p>USERNAME:{username}</p>
        <p>PASSWORD:{password}</p>
        </>
    );
}
export default Web;*/
/*function Web()
{
    const items=[
        {id:1,name:"chicken",category:"nonveg"},
        {id:2,name:"potato",category:"veg"},
        {id:3,name:"fish",category:"nonveg"},
        {id:4,name:"cabbage",category:"veg"},
        {id:5,name:"mutton",category:"nonveg"}
    ];
    const listItems=items.map(item=>
    (
       <li key={item.id} style={{color:item.category=='veg'?'green':'red'}}>Id:{item.id},Name:{item.name},category:{item.category}</li> 
    )
    );
    return (
        <>
        <h1>ITEMS</h1>
        <ul >{listItems}</ul>
        </>
    );
}
export default Web;*/

function Web()
{
    const items=[
        {id:1,name:"chicken",category:"nonveg"},
        {id:2,name:"potato",category:"veg"},
        {id:3,name:"fish",category:"nonveg"},
        {id:4,name:"cabbage",category:"veg"},
        {id:5,name:"mutton",category:"nonveg"}
    ];
    const listItems=items.map(item=>
    (<li key={item.id} style={{color:item.category=='veg'?'green':'red'}}>Id:{item.id},Name:{item.name},category:{item.category}</li> )
    );
    const vegItems=items.filter(item=>
      (item.category=='veg')).map(item=>(<li key={item.id} style={{color:item.category=='veg'?'green':'red'}}>Id:{item.id},Name:{item.name},category:{item.category}</li>))
    ;
    const nonvegItems=items.filter(item=>
      (item.category=='nonveg')).map(item=>(<li key={item.id} style={{color:item.category=='veg'?'green':'red'}}>Id:{item.id},Name:{item.name},category:{item.category}</li>))
    
    return (
        <>
        <h1>ITEMS</h1>
        <ul>{listItems}</ul>
        <ul >{vegItems}</ul>
        <ul>{nonvegItems}</ul>
        </>
    );
}
export default Web;


















