import React ,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function OnClick(){
    const [count,setCount]=useState(0);


   function increment(){
      setCount(count + 1);
   }

   function decrement(){
       setCount(count -1);
   }

   function console1(){
       console.log({count});
   }
    

return (
    <div>
        
            
            <p>{count}</p>
            <div><button onClick={increment}>click to increase</button></div> 
            <div><button onClick={decrement}>click to decrease</button></div> 
            <div><button onClick={()=>console1()}>console</button></div> 
        
    </div>
)
}
export default OnClick;