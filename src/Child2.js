import React, {useContext} from 'react';
import {nameContext} from './Child1';

function Child2(){
    const nameValue = useContext (nameContext);
    return(
        <div> Child2 {nameValue}</div>
    )
}
export default Child2;