import React from 'react';

export default ({id,category,paymentType,date,remove})=>{
    console.log(id);
    const removeExpense = ()=>remove(id);
    return (
        <div>
           
            {category}  <span onClick={removeExpense}> remove </span>
        </div>    
    )
}