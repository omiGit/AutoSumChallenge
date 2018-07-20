import * as actionType from '../const';
import axios from 'axios';  

export const postExpense = (data)=>async dispatch=>{
    dispatch({type:actionType.SET_LOADER});
    let  response;
    try{
    response = await axios.post('/expenses',data);
    dispatch({type:actionType.SET_EXPENSES,payload:response.data.expense});
    console.log(response.data);
    }catch(e){
     dispatch({type:actionType.SET_ERROR,payload:response.data.error});
     
    }
}

export const fetchExpenses = ()=>async dispatch=>{
  dispatch({type:actionType.SET_LOADER});
  let  response;
  try{
  response = await axios.get('/expenses');
  dispatch({type:actionType.SET_EXPENSES,payload:response.data.expenses});
  console.log(response.data);
  }catch(e){
    dispatch({type:actionType.SET_ERROR,payload:response.data.error});
   
  }
}

export const removeExpense = (id)=>async dispatch=>{
  dispatch({type:actionType.SET_LOADER});
  let  response;
  console.log(id);
  try{
  response = await axios.delete(`/expenses/${id}`);
  dispatch({type:actionType.REMOVE_EXPENSE,payload:id});
  console.log(response.data);
  }catch(e){
    dispatch({type:actionType.SET_ERROR,payload:response.data.error});

  }
}

export const updateExpense = data=>async dispatch=>{
  dispatch({type:actionType.SET_LOADER});
  let  response;
  try{
  response = await axios.patch(`/expenses`,data);
  dispatch({type:actionType.UPDATE_EXPENSE,payload:data});
  console.log(response.data);
  }catch(e){
    dispatch({type:actionType.SET_ERROR,payload:response.data.error});
  }
}

export const getCategory = (data)=>dispatch=>{
  console.log('data:',data);
  dispatch({type:actionType.SET_UPDATEVALUES,payload:data});
}
export const clearCategory = ()=>dispatch=>{
  dispatch({type:actionType.SET_CLEARCATEGORY});
}