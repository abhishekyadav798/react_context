import React, { useState, useEffect } from 'react';
import Child2 from './Child2';
import Child3 from './Child3';
import {useContext} from 'react';
import {createContext} from 'react';


function Child1(){
    
    var [initial, finalvalue] = useState("--"); 
    const [items, setItems] = useState();
  
    function button(){
 
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

        fetch("http://test", requestOptions)
        .then(response => response.text())
        .then(
            result => finalvalue(result),
            
        )
        .catch(error => console.log('error', error));

    }

    return(
        <div >
            How the value is passed from Child1 to Child2 and Child3 onclick
        <button onClick={()=>button()}>Click</button>
        {initial}
        <nameContext.Provider value={initial}>
        <Child2/>
        <Child3/>
        </nameContext.Provider>
        </div>
      
    )
}

export const nameContext = createContext('finalvalue');
export default Child1;