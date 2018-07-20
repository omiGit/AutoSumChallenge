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
      //dispatch({type:actionType.SET_ERROR});\
      console.log(e);
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
    //dispatch({type:actionType.SET_ERROR});\
    console.log(e);
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
    //dispatch({type:actionType.SET_ERROR});\
    console.log(e);
  }
}