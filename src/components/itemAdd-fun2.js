import React, { useState } from 'react';
import ItemAdd from './itemAdd';

const ItemAddFun2 = () => {

    // const [task,setTask]=useState([]);
    
    const addTask = (event) =>{
        event.preventDefault();
        const str = `{"email":`+`"${event.target.email.value}"}`;
        const obj = JSON.parse(str);
      
        //  setTask(obj);
         ItemAdd(obj);
        event.target.email.value='';
    } 

    return (
        <div>
            <form onSubmit={addTask}>
                <input name='email'/>
                <button type='submit'>add</button>
            </form>
        </div>
    );
}

export default ItemAddFun2;
