import * as actionType from '../const';
import axios from 'axios';  

export const postExpense = (data)=>async dispatch=>{
    dispatch({type:actionType.SET_LOADER});
    let  response;
    try{
    response = await axios.post('/expenses',data);
    //dispatch({type:actionType.SET_EXPENSES,payload:response.data});
    console.log(response.data);
    }catch(e){
      //dispatch({type:actionType.SET_ERROR});
    }
}