import React, {useContext} from 'react';
import {nameContext} from './Child1';

function Child3(){
    const nameValue = useContext (nameContext);
    return(
        <div> Child 3 {nameValue}</div>
       
    )
}
export default Child3;