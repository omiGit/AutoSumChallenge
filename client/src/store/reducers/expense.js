import * as actionType from '../const';
const initState = {
   expenses: [],
   loader:false,
   error:''
}

export default (state=initState,action)=>{

    switch(action.type){
        case actionType.SET_LOADER:
            return {...state,loader:true}

        case actionType.SET_EXPENSES:{
            const expenses = Array.isArray(action.payload) ? action.payload:[action.payload];
            return {...state,expenses:[...state.expenses,...expenses],loader:false}
        }
        case actionType.SET_ERROR:
            return {...state,error:action.payload,loader:false}
        
        default:
        return initState
    }

    
}