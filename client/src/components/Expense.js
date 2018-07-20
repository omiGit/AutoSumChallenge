import React from 'react';
import moment from 'moment';
export default ({id,category,paymentType,date,remove,getCategory})=>{
    const removeExpense = ()=>remove(id);
    const getCategoryValues = ()=>getCategory({_id:id,category,paymentType,date});
    return (
        <div style={{padding:'10px',margin:'15px'}}>
            <div onClick={getCategoryValues}>
            {category} 
            <span>-{paymentType}</span>
            <span>-{moment(date).format("MMM Do YYYY")}</span> 
            </div>
            <span onClick={removeExpense}> remove </span>
           
        </div>    
    )
}