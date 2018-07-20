import React from 'react';
import moment from 'moment';
export default ({id,category,paymentType,date,remove,getCategory})=>{
    const removeExpense = ()=>remove(id);
    const getCategoryValues = ()=>getCategory({_id:id,category,paymentType,date});
    return (
        <div style={{width:'80%',margin:'25px auto',border:'1px solid'}}>
            <div onClick={getCategoryValues} style={{borderBottom:'1px solid',cursor:'pointer'}}>
            <h3>Category : {category}</h3> 
            <h4> Payment Type : {paymentType}</h4>
            <h4> Date : {moment(date).format("MMM Do YYYY")}</h4> 
            </div>
            <div  style={{cursor:'pointer',width:'100%',padding:'5px'}} onClick={removeExpense}> remove </div>
           
        </div>    
    )
}